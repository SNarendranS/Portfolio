import { Box, Container, Link, Typography } from "@mui/material";
import type { HeroResponse, NavItemsResponse } from "../Types/StrapiResponseTypes";
import type { StrapiResponse } from "../Types/StrapiTypes";
import type { Prop } from "../Types/indexTypes";

type FooterProp = {
    NavItems: Prop<StrapiResponse<NavItemsResponse[]>>;
    Hero: Prop<StrapiResponse<HeroResponse>>;
};

const Footer = (prop: FooterProp) => {
    const navItems = prop?.NavItems?.data?.data
        ?.slice()
        .sort((a, b) => a.displayOrder - b.displayOrder);
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "#0A0A0A",
                color: "#B3B3B3",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                py: { xs: 6, md: 8 },
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
                        gap: { xs: 4, md: 6 },
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: { xs: "center", md: "flex-start" },
                            textAlign: { xs: "center", md: "left" },
                            gap: 1.5,
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 900,
                                letterSpacing: "-0.04em",
                                fontSize: "1.05rem",
                                color: "#F5F5F5",
                            }}
                        >
                            {prop?.Hero?.data?.data?.firstName + ' ' + prop?.Hero?.data?.data?.lastName}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "0.75rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                            }}
                        >
                            {prop?.Hero?.data?.data?.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "0.7rem",
                                opacity: 0.6,
                                mt: 0.5,
                            }}
                        >
                            © {new Date().getFullYear()} · Built with React & MUI
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            gap: { xs: 3, md: 4 },
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                        }}
                    >
                        {navItems?.map((item) => (
                            <Link
                                key={item.id}
                                underline="none"
                                sx={{
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "#B3B3B3",
                                    position: "relative",
                                    cursor: "pointer",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: -4,
                                        width: "0%",
                                        height: "1px",
                                        bgcolor: "#F5F5F5",
                                        transition: "width 0.3s ease",
                                    },
                                    "&:hover": {
                                        color: "#F5F5F5",
                                    },
                                    "&:hover::after": {
                                        width: "100%",
                                    },
                                }}
                            >
                                {item.itemName}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
