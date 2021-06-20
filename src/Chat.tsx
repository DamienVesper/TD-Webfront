import React from 'react';
import { hot } from 'react-hot-loader';

import { io } from 'socket.io-client';
import $ from 'jquery';

import '../public/assets/scss/pages/chat.scss';

declare const API_URL: string;

/**
 * The Chat widget.
 */

$(() => {
    $(`#chat-input`).keydown(e => {
        if (e.key === `Enter`) e.preventDefault();
    });

    $(`#chat-send`).on(`click`, e => e.preventDefault());

    fetch(`/authenticated`).then(data => data.json()).then(data => {
        fetch(`/api/get-emotes`).then(data => data.json()).then(emojis => {
            const username = data.username;
            const token = data.token;
            const streamer = window.location.pathname.split(`/`)[2].toLowerCase();

            if (!data.username) {
                $(`#chat-input`).attr(`placeholder`, `You must be logged in to chat...`);

                $(`#chat-input`).attr(`disabled`, `true`);
                $(`#chat-send`).attr(`disabled`, `true`);
            }

            if (data.isSuspended) {
                $(`#chat-input`).attr(`placeholder`, `Your account is suspended!`);

                $(`#chat-input`).attr(`disabled`, `true`);
                $(`#chat-send`).attr(`disabled`, `true`);
            }

            const socket = io(API_URL, {
                secure: true,
                rejectUnauthorized: true,
                withCredentials: true
            });

            socket.emit(`connectToChat`, username, token, streamer);

            socket.on(`handshake`, () => {
                const initMessage = $(`<div>`);
                initMessage.addClass(`text-muted chat-message`);
                initMessage.text(`Welcome to the chat!`);
                $(`.chat-history`).append(initMessage);

                $(`#chat-input`).trigger(`focus`);

                const sendChatMessage = () => {
                    socket.emit(`chatMessage`, $(`#chat-input`).val());
                    $(`#chat-input`).val(``);
                };

                $(`#chat-input`).trigger(`keydown`, (e: KeyboardEvent) => {
                    if (e.key === `Enter`) sendChatMessage();
                });

                $(`#chat-send`).on(`click`, e => sendChatMessage());

                socket.on(`chatMessage`, data => {
                    const displayName = data.displayName;
                    const message = data.message;

                    const chatColor = `${data.badges.streamer ? `orange` : data.badges.moderator ? `success` : data.badges.staff ? `primary` : data.badges.vip ? `danger` : `light`}`;

                    const messageWrapper = $(`<div>`);
                    messageWrapper.addClass(`chat-message`);

                    let parsedMessage = ``;
                    if (!message.startsWith(`<img title="/sticker`)) {
                        const emojisInMessage = message.split(`:`);
                        if (emojisInMessage.length > 1) {
                            for (const slice of emojisInMessage) {
                                const emoji = emojis.find(emoji => emoji.name === slice);

                                if (emoji) parsedMessage += `<img src="/assets/img/chat/emotes/${emoji.name}.${emoji.extension}" alt=":${emoji.name}:" title=":${emoji.name}:" class="chat-emoji">`;
                                else parsedMessage += `${slice}`;
                            }
                            if (parsedMessage.charAt(parsedMessage.length - 1) === `:`) parsedMessage = parsedMessage.slice(0, parsedMessage.length - 1);
                        } else parsedMessage = message;
                    } else parsedMessage = message;

                    const chatMessage = $(`<span class="text-light"><b class="text-${chatColor}">${displayName}:</b> ${parsedMessage}</span>`);

                    const streamerBadge = data.badges.streamer ? $(`<img src="/assets/img/chat/badges/streamer.png" class="chat-badge" alt="Streamer badge" title="Streamer">`) : undefined;
                    const moderatorBadge = data.badges.moderator ? $(`<img src="/assets/img/chat/badges/moderator.png" class="chat-badge" alt="Moderator badge" title="Channel Moderator">`) : undefined;
                    const staffBadge = data.badges.staff ? $(`<img src="/assets/img/chat/badges/staff.png" class="chat-badge" alt="Staff badge" title="ThrowdownTV Staff">`) : undefined;
                    const verifiedBadge = data.badges.verified ? $(`<img src="/assets/img/chat/badges/verified.png" class="chat-badge" alt="Verified badge" title="Verified User">`) : undefined;
                    const vipBadge = data.badges.vip ? $(`<img src="/assets/img/chat/badges/vip.png" class="chat-badge" alt="VIP badge" title="VIP User">`) : undefined;

                    const chatHistory = $(`.chat-history`);

                    if (streamerBadge) messageWrapper.append(streamerBadge);
                    if (moderatorBadge) messageWrapper.append(moderatorBadge);
                    if (staffBadge) messageWrapper.append(staffBadge);
                    if (verifiedBadge) messageWrapper.append(verifiedBadge);
                    if (vipBadge) messageWrapper.append(vipBadge);

                    messageWrapper.append(chatMessage);
                    chatHistory.append(messageWrapper);

                    const DOMchatHistory: HTMLDivElement = document.querySelector(`.chat-history`);
                    DOMchatHistory.scrollTop = DOMchatHistory.scrollHeight - DOMchatHistory.offsetHeight;
                });

                socket.on(`commandMessage`, message => {
                    const messageWrapper = $(`<div>`);
                    messageWrapper.addClass(`chat-message`);

                    messageWrapper.html(`<span class="text-muted">${message}</span>`);
                    $(`.chat-history`).append(messageWrapper);

                    const DOMchatHistory: HTMLDivElement = document.querySelector(`.chat-history`);
                    DOMchatHistory.scrollTop = DOMchatHistory.scrollHeight - DOMchatHistory.offsetHeight;
                });
            });
        });
    });
});

class Chat extends React.Component {
    render = () => {
        return (
            <main className="text-center chat-wrapper">
                <div className="chat-history"></div>
                <form className="chat-input-form">
                    <textarea id="chat-input" placeholder="Send a message" className="form-control text-light" rows={1} maxLength={1000} />
                    <input type="submit" id="chat-send" className="btn btn-sm btn-secondary" value="Chat"/>
                </form>
            </main>
        );
    }
}

export default hot(module)(Chat);
