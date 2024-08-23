'use client'

import { Box, Button, Container, Input, Paper, Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";

interface SearchProps {
    updateSearchParams: (params: string | null) => void
}

const Search = ({ updateSearchParams }:SearchProps) => {
    const [artist, setArtist] = useState<string | null>(null);
    const [song, setSong] = useState<string | null>(null);

    const inputArtist = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArtist(event.target.value);
    }

    const inputSong = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSong(event.target.value);
    }

    const searchParams:string = `/${artist}/${song}`

    const handleClick = () => {
        updateSearchParams(searchParams)
    } 

    const styles = {
        inputStyle: {
            innerWidth: "150px",
            margin: "8px",
            background: "white",
            padding: " 2px 6px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"
        }
    }

    return (
        <Box>
            <Container maxWidth="lg">
                <Paper sx={{
                    margin: "24px 0",
                    padding: "24px",
                    border: "2px solid blue",
                    borderRadius: "20px",
                    background: "#f9c8c2",
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <Typography variant="h2" fontSize="30px" align="center">Search for your favorite lyrics</Typography>
                    <Box display="flex" justifyContent="center">
                        <Input onChange={inputArtist} placeholder="Artist" required={true} sx={styles.inputStyle} />
                        <Input onChange={inputSong} placeholder="Song" required={true} sx={styles.inputStyle} />
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button onClick={handleClick} variant="contained" sx={{
                            width: "150px",
                            marginTop: "8px"
                        }}>Search</Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
};

export default Search
