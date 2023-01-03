import { Email, GitHub, LinkedIn, Person, Phone } from "@mui/icons-material";
import React from "react";
import styles from "../styles/Home.module.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <p className={styles.title_contact}>Informações de contato</p>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Name" secondary="Kalyana Greim" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Phone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary="(41) 9 99855614" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Email />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Email" secondary="kalygreim11@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LinkedIn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="In" secondary="https://www.linkedin.com/in/kalyanagreim/" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <GitHub />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Github" secondary="https://github.com/KalyanaGreim" />
        </ListItem>
      </List>
    </div>
  );
};

export default Contact;
