import React, {useState, useEffect} from 'react';
import Axios from "axios";
import Globals from "../utils/globals";
import {func} from "prop-types";

const sendFriendRequestUrl = Globals.fetchUrl + '/api/friendRequests/add';
const getNotificationsUrl = Globals.fetchUrl + '/api/friendRequests';
const setNotificationsSeenUrl = Globals.fetchUrl + '/api/friendRequests/seen';
const deleteNotificationUrl = Globals.fetchUrl + '/api/friendRequests';
const addFriendUrl = Globals.fetchUrl + '/api/friendRequests';
const getFriendsUrl = Globals.fetchUrl + '/api/friendRequests/getFriends';

export const FriendRequestContext = React.createContext(undefined, undefined);

export const FriendRequestProvider = (props) => {
    const [jwtToken, setJwtToken] = useState(localStorage.getItem("token"));
    const [notifications, setNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        (async () => {
            const notifications = await getUserNotifications();
            setNotifications(notifications.usersByNotifications);
            setNotificationCount(notifications.count);
            setFriends(await getFriends());
        })()
    }, []);

    async function sendFriendRequest(data) {
        return await Axios.post(sendFriendRequestUrl, {friendId: data}, {
            headers: {
                'x-auth-token': jwtToken,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.data;
        });
    }

    async function getUserNotifications() {
        return await Axios.get(getNotificationsUrl, {
            headers: {
                'x-auth-token': jwtToken,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.data;
        })
    }

    async function setNotificationsSeen() {
        return await Axios.patch(setNotificationsSeenUrl, {seen: true}, {
            headers: {
                'x-auth-token': jwtToken,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res.data;
            })

    }

    async function deleteNotification(id) {
        return await Axios.delete(deleteNotificationUrl + `/${id}`, {
            headers: {
                'x-auth-token': jwtToken,
                'Content-Type': 'application/json'
            },
        }).then(async res => {
            if (res.status === 200) {
                setNotifications(await getUserNotifications());
            }
        })
    }

    async function addFriend(id) {
        return await Axios.patch(addFriendUrl + `/${id}`, {}, {
            headers: {
                'x-auth-token': jwtToken,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                return res;
            })
    }

    async function getFriends() {
        return await Axios.get(getFriendsUrl, {
            headers: {
                'x-auth-token': jwtToken,
                'Content-Type': 'application/json'
            }
        })
            .then(res => {return res.data});
    }


    return (
        <FriendRequestContext.Provider
            value={{
                notifications: [notifications, setNotifications],
                notificationCount: [notificationCount, setNotificationCount],
                sendFriendRequest: sendFriendRequest,
                getUserNotifications: getUserNotifications,
                setNotificationsSeen: setNotificationsSeen,
                deleteNotification: deleteNotification,
                addFriend: addFriend,
                friends: [friends, setFriends]
            }}>
            {props.children}
        </FriendRequestContext.Provider>
    );
};
