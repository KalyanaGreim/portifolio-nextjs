import {
  ArrowBack,
  ChevronLeft,
  Email,
  GitHub,
  LinkedIn,
  Person,
  Send,
} from "@mui/icons-material";
import React from "react";
import styles from "../styles/Home.module.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { IconButton, ListItemButton } from "@mui/material";

const Contact: React.FC = () => {
  return (
    <div>
      <div className={styles.title_pages}>
        <IconButton aria-label="back" href="/" style={{background: 'rgb(144, 202, 249)', margin: '0px 0px 10px 0px'}}>
          <ChevronLeft />
        </IconButton>
        <p>Informações de contato </p>
      </div>
      <div className={styles.contact}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "rgb(144, 202, 249)" }}>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary="Kalyana Greim" />
          </ListItem>
          <ListItemButton
            href="https://api.whatsapp.com/send?phone=5541999855614"
            target="_blank"
          >
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "rgb(144, 202, 249)" }}>
                <Send />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Phone" secondary="(41) 9 99855614" />
          </ListItemButton>
          <ListItemButton href="mailto:kalygreim11@gmail" target="_blank">
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "rgb(144, 202, 249)" }}>
                <Email />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" secondary="kalygreim11@gmail.com" />
          </ListItemButton>
          <ListItemButton
            href="https://www.linkedin.com/in/kalyanagreim/"
            target="_blank"
          >
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "rgb(144, 202, 249)" }}>
                <LinkedIn />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="In"
              secondary="https://www.linkedin.com/in/kalyanagreim/"
            />
          </ListItemButton>
          <ListItemButton
            href="https://github.com/KalyanaGreim"
            target="_blank"
          >
            <ListItemAvatar>
              <Avatar style={{ backgroundColor: "rgb(144, 202, 249)" }}>
                <GitHub />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Github"
              secondary="https://github.com/KalyanaGreim"
            />
          </ListItemButton>
        </List>
      </div>
    </div>
  );
};

export default Contact;
