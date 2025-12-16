import { Box, Container, Link, Typography } from "@mui/material";
import { useGetHeroQuery } from "../Store/api/strapiApi";

const Footer = () => {
    const { data } = useGetHeroQuery();

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
                            {data?.data.firstName+' '+data?.data.lastName}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "0.75rem",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                            }}
                        >
                            Full-Stack Developer · UI Engineer · Problem Solver
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
                        {["About", "Projects", "Contact"].map((label) => (
                            <Link
                                key={label}
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
                                {label}
                            </Link>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
