import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ListIntegrate = ({}) => {
    return (
        <List className="listInt" sx={{ width: '900%', maxWidth: 1000, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className="img-list-int" src="chil.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Daniel Gonzalez"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Jefe y Cocinero
                            </Typography>

                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className="img-list-int" src="pau.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Paulina Santillan"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Ayudante del gerente general
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className="img-list-int" src="ian.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Ian Carlos"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Ayudante de cocina
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar className="img-list-int" src="capiba.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary="Sebastian Ramos"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Mesero
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}

export default ListIntegrate;