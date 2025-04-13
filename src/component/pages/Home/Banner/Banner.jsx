import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../assets/home/01.avif';
import img2 from '../../../../assets/home/02.jpg';
import img3 from '../../../../assets/home/03.avif';
import img4 from '../../../../assets/home/04.jpg';
import img5 from '../../../../assets/home/05.avif';
import img6 from '../../../../assets/home/06.jpg';

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Carousel 
                autoPlay 
                interval={4000} 
                infiniteLoop 
                showThumbs={false} 
                showStatus={false}
                className="rounded-xl"
            >
                {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                    <div key={index}>
                        <img 
                            src={img} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-xl shadow-lg"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
