/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useContext, useEffect, useState} from "react";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Fab from "@material-ui/core/Fab";
import DefaultAvatar from '../assets/img/avatar.jpg'
import PersonAddIcon from '@material-ui/icons/PersonAdd';


import "../assets/css/paper-dashboard.css";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    FormGroup,
    Form,
    Input,
    Row,
    Col
} from "reactstrap";
import {UserContext} from "../contexts/UserContext";
import {makeStyles} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Uploader from "../components/Uploader/Uploader"
import {Upload} from "antd";
import {Image} from 'cloudinary-react'
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import User from "../components/User/User";
import Friends from "../components/Friends/Friends";
import PopoverMenu from "../components/PopoverMenu/PopoverMenu";
import {FriendRequestContext} from "../contexts/FriendRequestContext";
import {Avatar} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    // root: {
    //     backgroundColor: theme.palette.background.paper,
    //     width: 500,
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "flex-end"
    // },
    icon: {
        margin: theme.spacing(2)
    },
    // iconHover: {
    //     margin: theme.spacing.unit * 2,
    //     "&:hover": {
    //         color: red[800]
    //     }
    // },
    // cardHeader: {
    //     textalign: "center",
    //     align: "center",
    //     backgroundColor: "white"
    // },
    input: {
        display: "none"
    },
    // title: {
    //     color: blue[800],
    //     fontWeight: "bold",
    //     fontFamily: "Montserrat",
    //     align: "center"
    // },
    button: {
        color: blue[900],
        margin: 10
    },
    secondaryButton: {
        color: "gray",
        margin: 10
    },
    // typography: {
    //     margin: theme.spacing.unit * 2,
    //     backgroundColor: "default"
    // },
    //
    // searchRoot: {
    //     padding: "2px 4px",
    //     display: "flex",
    //     alignItems: "center",
    //     width: 400
    // },
    // searchInput: {
    //     marginLeft: 8,
    //     flex: 1
    // }
}));

function ProfilePage() {
    const classes = useStyles();

    const {user, updateUser, getAllUser} = useContext(UserContext);
    const userLoggedIn = user[0];
    const updateUserDetails = updateUser;

    const appContext = useContext(FriendRequestContext);
    const friends = appContext.friends[0];
    // const [profileImageUploaded, setProfileImageUploaded] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    // userLoggedIn.imageUrl = imageUrl;
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);


    const getFullName = (user) => {
        return `${user.firstName} ${user.lastName}`
    };


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(!open);

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let widget = window.cloudinary.createUploadWidget({
            cloudName: 'harmoney-profile-images',
            apiKey: '868976747589266',
            uploadPreset: 'upload'
        },
        (error, result) => {
            if (result.event === 'success') {
                console.log(result.info.url);
                setImageUrl(result.info.url);
                console.log(imageUrl);
                userLoggedIn.imageUrl = result.info.url;
            }
            console.log(result.event);
        });


    const showWidget = widget => {
        widget.open();
    };


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="4">
                        <Card className="card-user">
                            <div className="image">
                                <img
                                    alt="..."
                                    src={require("../assets/img/signinimage.jpg")}
                                />
                            </div>
                            <CardBody>
                                <div className="author">
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={userLoggedIn?.profileImage !== "" ? userLoggedIn?.profileImage : DefaultAvatar}
                                        />
                                        <h5 className="title">{`${userLoggedIn?.firstName} ${userLoggedIn?.lastName}`}</h5>
                                    </a>
                                    {/*<Uploader*/}
                                    {/*    className={classes}*/}
                                    {/*    onClick={showWidget(widget)}*/}
                                    {/*/>*/}
                                    <Uploader
                                        className={classes}
                                        onClick={() => showWidget(widget)}/>

                                    <p className="description">@{`${userLoggedIn?.firstName} ${userLoggedIn?.lastName}`}</p>
                                </div>
                                {/*<p className="description text-center">*/}
                                {/*    "I like the way you work it <br/>*/}
                                {/*    No diggity <br/>I wanna bag it up"*/}
                                {/*</p>*/}
                            </CardBody>
                            <CardFooter>
                                <hr/>
                                <div className="button-container">
                                    <Row>
                                        <Col className="ml-auto" lg="3" md="6" xs="6">
                                            <h5>
                                                12 <br/>
                                                <small>Files</small>
                                            </h5>
                                        </Col>
                                        <Col className="ml-auto mr-auto" lg="4" md="6" xs="6">
                                            <h5>
                                                2GB <br/>
                                                <small>Used</small>
                                            </h5>
                                        </Col>
                                        <Col className="mr-auto" lg="3">
                                            <h5>
                                                24,6$ <br/>
                                                <small>Spent</small>
                                            </h5>
                                        </Col>
                                    </Row>
                                </div>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Team Members</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <ul className="list-unstyled team-members">
                                    <li>
                                        <Row>
                                            <Col md="5" xs="2">
                                                <h3 className='title'>Friends</h3>
                                            </Col>
                                        </Row>
                                    </li>
                                    <li>
                                        <Row>
                                            <Col md="12" xs="2">
                                                <ListItem button onClick={handleClick}>
                                                    <ListItemIcon>
                                                        <PersonAddIcon/>
                                                    </ListItemIcon>
                                                    <ListItemText primary="Add friend"/>
                                                    <PopoverMenu
                                                        title={"Users you may know"}
                                                        anchorEl={anchorEl}
                                                        open={open}
                                                        onClose={handleClose}
                                                    >
                                                        <Friends/>
                                                    </PopoverMenu>
                                                </ListItem>
                                            </Col>
                                        </Row>
                                    </li>
                                    {friends?.map(friend =>
                                    <li>
                                        <Row>
                                            <Col md="2" xs="2">
                                                <Avatar
                                                    alt={friend.id?.firstName}
                                                src={friend.id?.profileImage !== "" ? friend.id?.profileImage : DefaultAvatar}
                                                />
                                            </Col>
                                            <Col className="col-ms-7" xs="7">
                                                {friend.id?.firstName} {friend.id?.lastName} <br/>
                                                <span className={friend?.confirmed ? "text-success" : "text-danger"}>
                                                    <small>{friend?.confirmed ? "confirmed" : "pending"}</small>
                                                </span>
                                            </Col>
                                            <Col className="text-right" md="3" xs="3">
                                                <Button
                                                    className="btn-round btn-icon"
                                                    color="success"
                                                    outline
                                                    size="sm"
                                                >
                                                    <i className="fa fa-envelope"/>
                                                </Button>
                                            </Col>
                                        </Row>
                                    </li>
                                    )}
                                </ul>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card className="card-user">
                            <CardHeader>
                                <CardTitle tag="h5">Edit Profile</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-1" md="5">
                                            <FormGroup>
                                                <label>Company (disabled)</label>
                                                <Input
                                                    defaultValue="Creative Code Inc."
                                                    disabled
                                                    placeholder="Company"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-1" md="3">
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input
                                                    placeholder="Username"
                                                    type="text"
                                                    value={userLoggedIn?.email}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <FormGroup>
                                                <label htmlFor="exampleInputEmail1">
                                                    Email address
                                                </label>
                                                <Input placeholder="Email"
                                                       type="email"
                                                       value={userLoggedIn?.email}/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="6">
                                            <FormGroup>
                                                <label>First Name</label>
                                                <Input
                                                    placeholder="Company"
                                                    type="text"
                                                    value={userLoggedIn?.firstName}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="6">
                                            <FormGroup>
                                                <label>Last Name</label>
                                                <Input
                                                    defaultValue="Faker"
                                                    placeholder="Last Name"
                                                    type="text"
                                                    value={userLoggedIn?.lastName}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Address</label>
                                                <Input
                                                    defaultValue="Melbourne, Australia"
                                                    placeholder="Home Address"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-1" md="4">
                                            <FormGroup>
                                                <label>City</label>
                                                <Input
                                                    defaultValue="Melbourne"
                                                    placeholder="City"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-1" md="4">
                                            <FormGroup>
                                                <label>Country</label>
                                                <Input
                                                    defaultValue="Australia"
                                                    placeholder="Country"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-1" md="4">
                                            <FormGroup>
                                                <label>Postal Code</label>
                                                <Input placeholder="ZIP Code" type="number"/>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>About Me</label>
                                                <Input
                                                    type="textarea"
                                                    defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div className="update ml-auto mr-auto">
                                            <Button
                                                className="btn-round"
                                                color="primary"
                                                type="submit"
                                                onClick={() => updateUserDetails({
                                                    user: userLoggedIn,
                                                    imageUrl: imageUrl
                                                }, userLoggedIn?.id)}
                                            >
                                                Update Profile
                                            </Button>
                                        </div>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default ProfilePage;