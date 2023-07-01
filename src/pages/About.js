import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
    return (
        <Layout>
            <Box
                sx={
                    {
                        my: 15,
                        textAlign: "center",
                        p: 2,
                        "& h4": {
                            fontWeight: "bold",
                            my: 2,
                            fontSize: "2rem",
                        },
                        "& p": {
                            textAlign: "justify"
                        },
                        "@media (max-width:600px)": {

                            mt: 0,
                            "& h4": {
                                fontSize: "1.5rem",
                            }
                        }
                    }
                }
            >
                <Typography variant='h4'>
                    Welcome To My Resturant
                </Typography>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nemo laboriosam voluptate. Pariatur quae quas dolorem quo sint neque voluptatum, accusantium quasi ab aspernatur ducimus voluptate sapiente ipsum corrupti blanditiis laborum! Ut fuga facere nesciunt at. Quis cumque at officia odit amet, quaerat, corrupti velit nisi inventore delectus voluptates tenetur in vero nesciunt quia doloribus neque ut assumenda dicta odio. Rerum, repudiandae? Eum, cumque. Doloremque esse ad laborum perspiciatis aut ipsa dolor praesentium iure sapiente maxime ea, adipisci eius accusamus doloribus labore, tempore repudiandae ipsum mollitia facere repellat! Animi eius, minus maxime repudiandae illo laborum voluptates cupiditate placeat doloribus quaerat!
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit tempora eum exercitationem voluptas adipisci hic mollitia minima corrupti architecto! Amet, placeat. Nisi quam sit consequuntur voluptas nihil aperiam facere voluptatum maxime explicabo similique aliquid, repellendus quaerat harum ab, culpa nobis consequatur cum? Nobis officiis, cupiditate laudantium consequatur perspiciatis quo repudiandae rem explicabo quam nostrum inventore ad distinctio nulla molestias amet fugiat obcaecati tempore quia? Aliquid iste sint, optio necessitatibus modi temporibus veniam ipsam sapiente id, dignissimos quaerat dolores eius harum placeat maiores maxime, numquam consequatur. Facilis suscipit possimus, soluta explicabo ullam dolores est eveniet vero, totam facere excepturi fugiat!
                </p>
            </Box>
        </Layout>
    )
}

export default About