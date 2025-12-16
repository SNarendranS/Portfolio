import { Box, Button, Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { NavItemsResponse } from "../Types/StrapiResponseTypes";

type Props = {
    items: NavItemsResponse[];
    open: boolean;
    setOpen: (open: boolean) => void;
};

const MobileDrawer = ({ items, open, setOpen }: Props) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
                sx: {
                    width: "100%",
                    maxWidth: 360,
                    backgroundColor: "rgba(10,10,10,0.95)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                },
            }}
        >
            <Box
                sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 5,
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 900,
                            letterSpacing: "-0.05em",
                            fontSize: "1.2rem",
                            color: "#fff",
                        }}
                    >
                        BRAND
                    </Typography>

                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{ color: "#fff" }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                {items?.map((item) => {
                    if (item.navType === "text") {
                        return (
                            <Typography
                                key={item.id}
                                sx={{
                                    py: 1.5,
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.25em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.5)",
                                }}
                            >
                                {item.itemName}
                            </Typography>
                        );
                    }

                    if (item.navType === "link") {
                        return (
                            <Box
                                key={item.id}
                                sx={{
                                    py: 1.5,
                                    position: "relative",
                                    cursor: "pointer",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: 6,
                                        width: "0%",
                                        height: "1px",
                                        backgroundColor: "#fff",
                                        transition: "width 0.3s ease",
                                    },
                                    "&:hover::after": {
                                        width: "100%",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "0.85rem",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                    }}
                                >
                                    {item.itemName}
                                </Typography>
                            </Box>
                        );
                    }

                    if (item.navType === "button") {
                        return (
                            <Button
                                key={item.id}
                                sx={{
                                    mt: 2,
                                    borderRadius: 0,
                                    py: 1.5,
                                    border: "1px solid #fff",
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    fontSize: "0.75rem",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: "#fff",
                                        color: "#000",
                                    },
                                }}
                            >
                                {item.itemName}
                            </Button>
                        );
                    }

                    if (item.navType === "dropdown") {
                        return (
                            <Box
                                key={item.id}
                                sx={{
                                    mt: 2,
                                    border: "1px solid rgba(255,255,255,0.4)",
                                    px: 2,
                                    py: 1.2,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "0.75rem",
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                    }}
                                >
                                    {item.itemName}
                                </Typography>
                            </Box>
                        );
                    }

                    return null;
                })}
            </Box>
        </Drawer>
    );
};

export default MobileDrawer;
