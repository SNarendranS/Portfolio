import React from "react"
import {
    Box,
    Container,
    Typography,
    Link,
    List,
    ListItem
} from "@mui/material"
import { motion, type Variants } from "framer-motion"
import { useGetProjectsQuery } from "../Store/api/strapiApi"
import { getStrapiImageURL } from "../utils/HelperFunctions"
import MotionCarousel from "../Components/MotionCarousel"

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 90 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: "easeOut" }
    }
}

const Projects: React.FC = () => {
    const { data, isLoading } = useGetProjectsQuery()
    if (isLoading) return null

    return (
        <Box component="section" sx={{ py: { xs: 14, md: 20 }, background: '#3b3b3bff' }}>
            <Container maxWidth="xl">
                <Typography
                    sx={{
                        fontSize: { xs: "1.9rem", md: "2.8rem" },
                        fontWeight: 900,
                        color: "#F5F5F5",
                        letterSpacing: "-0.035em",
                        mb: { xs: 10, md: 14 }
                    }}
                >
                    Selected Work
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 14, md: 22 } }}>
                    {data?.data.map((item, i) => {
                        const isReverse = i % 2 !== 0

                        return (
                            <>
                                <Box
                                    key={item.id}
                                    component={motion.div}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-140px" }}
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: { xs: "1fr", md: "1.35fr 1fr" },
                                        gap: { xs: 7, md: 12 },
                                        alignItems: "center",
                                        ...(isReverse && {
                                            gridTemplateColumns: { xs: "1fr", md: "1fr 1.35fr" }
                                        })
                                    }}
                                >
                                    {/* HERO VISUAL */}
                                    <Box
                                        sx={{
                                            order: { xs: 1, md: isReverse ? 2 : 1 },
                                            position: "relative"
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                inset: -20,
                                                background:
                                                    "radial-gradient(50% 50% at center, rgba(255,255,255,0.12), transparent)",
                                                filter: "blur(40px)",
                                                zIndex: 0
                                            }}
                                        />

                                        <Box sx={{ position: "relative", zIndex: 1 }}>
                                            {item.demoScreenshots?.length > 0 && (
                                                <MotionCarousel
                                                    images={item.demoScreenshots.map(s =>
                                                        getStrapiImageURL(s.url)
                                                    )}
                                                />
                                            )}
                                        </Box>
                                    </Box>

                                    {/* CONTENT PANEL */}
                                    <Box
                                        sx={{
                                            order: { xs: 2, md: isReverse ? 1 : 2 },
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 3.5,
                                            position: "relative",
                                        }}
                                    >
                                        <Box display={'flex'} alignItems={'center'} sx={{ justifyContent: { xs: 'space-evenly', md: 'flex-start' } }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "1.7rem",
                                                    fontWeight: 800,
                                                    color: "#F5F5F5",
                                                    letterSpacing: "-0.02em"
                                                }}
                                            >
                                                {item.projectName}
                                            </Typography>
                                            {/* Thumbnail badge */}
                                            {item.thumbnail?.url && (
                                                <Box
                                                    component="img"
                                                    src={getStrapiImageURL(item.thumbnail.url)}
                                                    sx={{
                                                        width: 56,
                                                        height: 56,
                                                        objectFit: "contain",
                                                        opacity: 0.85,
                                                        mb: 1,
                                                        ml: { xs: 0, md: 4 }
                                                    }}
                                                />
                                            )}
                                        </Box>
                                        <Typography
                                            sx={{
                                                color: "#CFCFCF",
                                                fontSize: "1.02rem",
                                                lineHeight: 1.9,
                                                maxWidth: { xs: '100%', md: 520 },
                                                textAlign: { xs: 'center', md: 'justify' }

                                            }}
                                        >
                                            {item.projectDescription}
                                        </Typography>

                                        <List
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 1.6,
                                                p: 0,
                                                mt: 1
                                            }}
                                        >
                                            {item.techStack.map(tech => (
                                                <ListItem
                                                    key={tech}
                                                    sx={{
                                                        width: "auto",
                                                        px: 1.7,
                                                        py: 0.65,
                                                        fontSize: "0.65rem",
                                                        letterSpacing: "0.18em",
                                                        textTransform: "uppercase",
                                                        color: "#F5F5F5",
                                                        border: "1px solid rgba(255,255,255,0.22)",
                                                        backdropFilter: "blur(6px)"
                                                    }}
                                                >
                                                    {tech}
                                                </ListItem>
                                            ))}
                                        </List>

                                        <Box sx={{ display: "flex", gap: 6, mt: 2 }}>
                                            {item.gitURL && (
                                                <Link
                                                    href={item.gitURL}
                                                    target="_blank"
                                                    underline="none"
                                                    sx={{
                                                        fontSize: "0.78rem",
                                                        letterSpacing: "0.24em",
                                                        color: "#F5F5F5",
                                                        position: "relative",
                                                        "&::after": {
                                                            content: '""',
                                                            position: "absolute",
                                                            left: 0,
                                                            bottom: -6,
                                                            width: "0%",
                                                            height: "1px",
                                                            bgcolor: "#F5F5F5",
                                                            transition: "width 0.3s ease"
                                                        },
                                                        "&:hover::after": { width: "100%" }
                                                    }}
                                                >
                                                    GITHUB
                                                </Link>
                                            )}

                                            {item.liveURL && (
                                                <Link
                                                    href={item.liveURL}
                                                    target="_blank"
                                                    underline="none"
                                                    sx={{
                                                        fontSize: "0.78rem",
                                                        letterSpacing: "0.24em",
                                                        color: "#F5F5F5",
                                                        position: "relative",
                                                        "&::after": {
                                                            content: '""',
                                                            position: "absolute",
                                                            left: 0,
                                                            bottom: -6,
                                                            width: "0%",
                                                            height: "1px",
                                                            bgcolor: "#F5F5F5",
                                                            transition: "width 0.3s ease"
                                                        },
                                                        "&:hover::after": { width: "100%" }
                                                    }}
                                                >
                                                    LIVE
                                                </Link>
                                            )}
                                        </Box>

                                        {/* DEMO VIDEO */}
                                        {item.demoVideo?.url && (
                                            <Box
                                                component={motion.video}
                                                whileHover={{ scale: 1.015 }}
                                                controls
                                                muted
                                                loop
                                                src={getStrapiImageURL(item.demoVideo.url)}
                                                sx={{
                                                    mt: 5,
                                                    width: "100%",
                                                    borderRadius: 2,
                                                    boxShadow: "0 40px 120px rgba(0,0,0,0.6)"
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Box>
                                <Box component={'hr'} sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }} />
                            </>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}

export default Projects
