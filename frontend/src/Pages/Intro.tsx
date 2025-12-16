import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion, type Variants } from 'framer-motion';
import { useGetHeroQuery } from '../Store/api/strapiApi';

const reveal: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const placeholder = '/placeholder.jpg';

const Intro: React.FC = () => {
    const { data, isLoading, error } = useGetHeroQuery();

    if (isLoading) return null;
    if (error) return null;

    const hero = data?.data;

    return (
        <Box
            component="header"
            sx={{
                minHeight: '100vh',
                bgcolor: '#0A0A0A',
                color: '#F5F5F5',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                mt:{xs:4,md:2}
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
                        gap: { xs: 6, md: 10 },
                        alignItems: 'center',
                        pt: { xs: 8 }
                    }}
                >
                    {/* TEXT */}
                    <Box sx={{display:{xs:'flex',md:'block'},flexDirection:'column',alignItems:'center'}}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "center", md: "flex-start" },
                            }}
                        >
                            <motion.div variants={reveal} initial="hidden" animate="visible">
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: "2.4rem",
                                            sm: "3.2rem",
                                            md: "5rem",
                                            xl: "6rem",
                                        },
                                        fontWeight: 900,
                                        lineHeight: 0.95,
                                        letterSpacing: "-0.04em",
                                    }}
                                >
                                    {hero?.firstName}
                                </Typography>
                            </motion.div>

                            <motion.div variants={reveal} initial="hidden" animate="visible">
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: "2.1rem",
                                            sm: "2.8rem",
                                            md: "4.5rem",
                                            xl: "5.5rem",
                                        },
                                        fontWeight: 300,
                                        lineHeight: 0.95,
                                        letterSpacing: "-0.04em",
                                        mt: { xs: 0.5, md: -0.5 },
                                        ml: { xs: 0, md: "0.25ch" },
                                    }}
                                >
                                    {hero?.lastName}
                                </Typography>
                            </motion.div>
                        </Box>

                        <motion.div variants={reveal} initial="hidden" animate="visible">
                            <Typography
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: '1.1rem', md: '1.4rem' },
                                    color: '#B3B3B3',
                                    maxWidth: '520px',
                                }}
                            >
                                {hero?.title}
                            </Typography>
                        </motion.div>

                        <motion.div variants={reveal} initial="hidden" animate="visible">
                            <Typography
                                sx={{
                                    mt: 4,
                                    fontSize: '0.95rem',
                                    lineHeight: 1.8,
                                    maxWidth: '520px',
                                    color: '#D1D1D1',
                                    textAlign:{xs:'center',md:'justify'}
                                }}
                            >
                                {hero?.biography}
                            </Typography>
                        </motion.div>

                        <motion.div variants={reveal} initial="hidden" animate="visible">
                            <Button
                                sx={{
                                    mt: 6,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 0,
                                    border: '1px solid #F5F5F5',
                                    color: '#F5F5F5',
                                    backgroundColor: 'transparent',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    fontSize: '0.75rem',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        bgcolor: '#F5F5F5',
                                        color: '#0A0A0A',
                                    },
                                }}
                            >
                                Get in touch
                            </Button>
                        </motion.div>
                    </Box>

                    {/* IMAGE */}
                    <Box
                        component={motion.div}
                        initial={{ clipPath: 'inset(0 100% 0 0)' }}
                        animate={{ clipPath: 'inset(0 0% 0 0)' }}
                        transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }}
                        sx={{
                            position: 'relative',
                            height: { xs: '60vh', md: '75vh' },
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={
                                hero?.picture?.url
                                    ? `${import.meta.env.VITE_APP_STRAPI_BASE_URL}${hero.picture.url}`
                                    : placeholder
                            }
                            alt={hero?.picture?.alternativeText || ''}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(100%) contrast(1.1)',
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Intro;
