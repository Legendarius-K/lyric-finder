'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Search from "@/components/Search";
import { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
    const [searchParams, setSearchParams] = useState<string | null>(null);
    const [lyrics, setLyrics] = useState<string | null>(null)
    const [errorMsg , setErrorMsg] = useState<string | null>(null)
    const isInitialMount = useRef(true);

    const getSong = async () => {
        try {
            setErrorMsg(null)
            setLyrics(null);
            const response = await fetch(`https://api.lyrics.ovh/v1${searchParams}`);
            const data = await response.json();
            console.log('data: ', data);

            if (!response.ok) {
                throw new Error("Sorry! No Match!")
            }

            setLyrics(data.lyrics)
        } catch (error) {
            // console.log(error);
            setErrorMsg("Sorry! No match!")
            console.log(errorMsg);
            setLyrics(null);
        }
    };

    // console.log(lyrics);

    useEffect(() => {
        searchParams && getSong()
    }, [searchParams]);

    const [artist, title] = searchParams ? searchParams.split('/').filter(Boolean) : [null, null];

    return (
        <main>
            <Search updateSearchParams={setSearchParams} />
            <Box padding={4}>
                {lyrics && (
                    <>
                        {artist && <Typography textAlign="center" variant="h4" sx={{
                            textDecoration: "underline",
                        }}>{artist.toUpperCase()}</Typography>}
                        {title && <Typography textAlign="center" variant="h5">{title.toUpperCase()}</Typography>}
                        <Box textAlign="center">
                            <Container maxWidth="xs" sx={{
                                textAlign: "start"
                            }}>
                                <p style={{ whiteSpace: 'pre-wrap' }}>{lyrics}</p>
                            </Container>
                        </Box>
                    </>
                )}
                {errorMsg && <Typography textAlign="center" variant="h4" color="red">{errorMsg}</Typography>}
            </Box>
        </main>
    );
}
