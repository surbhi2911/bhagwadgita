// import React from 'react';

// function Imagegrid() {
//   return (
//     <>
//     <div className="darkviolet">
// <div className="container p-3 p-lg-5">
//     <h2 className=" text-white text-center py-3 fw-bold">
//     પારસ પાંધીના સફળ કાર્યક્રમો
//     </h2>




//     <div>


//     </div>
// </div>
//     </div>
//     </>
//   );
// }

// export default Imagegrid;
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ImageGrid() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className="darkviolet">
            <div className="container">
                <div className="p-4 ">
                    <h2 className="text-white text-center py-3 font-bold text-lg md:text-2xl">
                        પારસ પાંધીના સફળ કાર્યક્રમો
                    </h2>
                    <ImageList
                        sx={{ width: '100%', maxWidth: 800, height: 'auto' }}
                        variant="quilted"
                        cols={isMobile ? 2 : 4}
                        // rowHeight={121}
                        className='mx-auto'
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                    className="rounded-lg shadow-md"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>
        </div>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        cols: 2
    },

    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        cols: 2,

    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        cols: 2,
    },
];
