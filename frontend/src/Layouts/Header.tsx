import { useState } from "react";
import {
    AppBar,
    Box,
    Button,
    IconButton,
    Link,
    MenuItem,
    Select,
    Toolbar,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import type { NavItemsResponse } from "../Types/StrapiResponseTypes";
import MobileDrawer from "../Components/Drawer";
import type { Prop, RefType } from "../Types/indexTypes";
import type { StrapiResponse } from "../Types/StrapiTypes";
type HeaderProp = {
    navItems: Prop<StrapiResponse<NavItemsResponse[]>>;
    ref: RefType
}
const Header = (prop: HeaderProp) => {
    const [open, setOpen] = useState(false);
    const scrollTo = (name: string) => {
        const key = (name.toLowerCase()+'Ref') as keyof RefType;
        const ref = prop.ref[key];
        ref?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };


    const items = prop.navItems?.data?.data
        ?.slice()
        .sort((a, b) => a.displayOrder - b.displayOrder);

    return (
        <>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: "rgba(70, 70, 70, 0.85)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
            >
                <Toolbar
                    sx={{
                        maxWidth: "xl",
                        width: "100%",
                        mx: "auto",
                        display: "flex",
                        justifyContent: { xs: "flex-end", md: "center" },
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: 4,
                            alignItems: "center",
                        }}
                    >
                        {items?.map((item: NavItemsResponse) => {
                            if (item.navType === "text") {
                                return (
                                    <Typography
                                        key={item.id}
                                        sx={{
                                            fontSize: "0.75rem",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "#EDEDED",
                                        }}
                                    >
                                        {item.itemName}
                                    </Typography>
                                );
                            }

                            if (item.navType === "link") {
                                return (
                                    <Link
                                        key={item.id}
                                        underline="none"
                                        sx={{
                                            position: "relative",
                                            fontSize: "0.75rem",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "#EDEDED",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {item.itemName}
                                    </Link>
                                );
                            }

                            if (item.navType === "button") {
                                return (
                                    <Button
                                        onClick={() => scrollTo(item.itemName)}
                                        key={item.id}
                                        sx={{
                                            borderRadius: 0,
                                            px: 3,
                                            py: 1,
                                            border: "1px solid #fff",
                                            backgroundColor: "transparent",
                                            color: "#fff",
                                            fontSize: "0.7rem",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
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
                                    <Select
                                        key={item.id}
                                        displayEmpty
                                        sx={{
                                            color: "#fff",
                                            fontSize: "0.75rem",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            borderRadius: 0,
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                border: "1px solid rgba(255,255,255,0.4)",
                                            },
                                            "& svg": {
                                                color: "#fff",
                                            },
                                        }}
                                    >
                                        <MenuItem value="">
                                            {item.itemName}
                                        </MenuItem>
                                    </Select>
                                );
                            }

                            return null;
                        })}
                    </Box>

                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            display: { xs: "flex", md: "none" },
                            color: "#fff",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <MobileDrawer items={items!} open={open} setOpen={setOpen} />
        </>
    );
};

export default Header;
