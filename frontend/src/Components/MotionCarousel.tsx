import { Box, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";

type Props = {
    images: string[];
};

const MotionCarousel = ({ images }: Props) => {
    const [index, setIndex] = useState(0);

    const paginate = (dir: number) => {
        setIndex((prev) => {
            const next = prev + dir;
            if (next < 0) return images.length - 1;
            if (next >= images.length) return 0;
            return next;
        });
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: 400,
                position: "relative",
                overflow: "hidden",
            }}
        >
            <AnimatePresence initial={false} mode="wait">
                <Box
                    key={index}
                    component={motion.img}
                    src={images[index]}
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(_, info) => {
                        if (info.offset.x < -80) paginate(1)
                        if (info.offset.x > 80) paginate(-1)
                    }}
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        backgroundColor: "#3b3b3bff",
                        userSelect: "none",
                        cursor: "grab",
                        filter: "grayscale(100%)",
                    }}
                />
            </AnimatePresence>

            {/* arrows */}
            <IconButton
                onClick={() => paginate(-1)}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 8,
                    transform: "translateY(-50%)",
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.4)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
                }}
            >
                <ChevronLeftIcon />
            </IconButton>

            <IconButton
                onClick={() => paginate(1)}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 8,
                    transform: "translateY(-50%)",
                    color: "#fff",
                    bgcolor: "rgba(0,0,0,0.4)",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
                }}
            >
                <ChevronRightIcon />
            </IconButton>

            {/* indicators */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 8,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: 1,
                }}
            >
                {images.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => setIndex(i)}
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            cursor: "pointer",
                            bgcolor:
                                i === index
                                    ? "#F5F5F5"
                                    : "rgba(255,255,255,0.4)",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default MotionCarousel;
