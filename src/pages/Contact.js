import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout/Layout';
const Contact = () => {
    return (

        <Layout>
            <Box sx={{ my: 5, mx: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
                <Typography variant='h4'>
                    Contact My Resturants
                </Typography>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos et nobis, possimus soluta modi, quas dolore totam voluptatem deleniti cum neque qui rem explicabo rerum reprehenderit, quasi alias aut numquam accusantium sequi. Nisi necessitatibus aut amet aspernatur, quod aliquam velit magni explicabo doloribus iure laborum fugiat hic distinctio odit ea.
                </p>

            </Box>
            <Box sx={{
                m: 3, width: "600px", ml: 10, "@media (max-width:600px)": {
                    width: "300px"
                },
            }}>
                <TableContainer component={Paper}>
                    <Table aria-label='contact table'>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ bgcolor: 'black', color: 'white', }} align='center'>
                                    Contact Details
                                </TableCell>

                            </TableRow>

                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800200240(toofree)

                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@tkg.com

                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <CallIcon sx={{ color: "skyblue", pt: 1 }} /> 9867569822

                                </TableCell>
                            </TableRow>
                        </TableBody>

                    </Table>

                </TableContainer>
            </Box>
        </Layout >

    )
}

export default Contact