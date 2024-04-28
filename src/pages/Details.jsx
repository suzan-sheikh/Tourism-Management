
import { Typewriter } from 'react-simple-typewriter';

const Details = () => {

    const handleType = (count) => {
        // access word count number
        console.log(count);
      };
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`);
      };


    return (
        <div>
            <div className="container mt-28 mx-auto flex items-center justify-center">
                <div className="w-3/4">
                    <div className="h-96 w-full">
                         <img src="https://images.unsplash.com/photo-1602528495711-f52bf3988a00?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="h-full w-full" />
                    </div>


                    <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
                    Image Related Content{' '}
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Bangladesh', 'Thailand', 'Indonesia', 'Vietnam', 'Malaysia!']}
                            loop={10}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                        </span>
                    </h1>





                   <div className="mt-4 md:mt-8 mb-4 md:mb-8 text-justify">
                        <p>Honestly, the room we stayed in was unlike any other place I have been before. The bungalow was largely open-view, which means we got to wake up to the incredible ocean view every morning. And, since the room is directly over-water, you can dip into the water straight from your balcony for a snorkel or swim. On top of that, the bungalow had spots where you could see the ocean floor underneath your feet! I particularly loved the glass-bottom bathtubs which provided the perfect point of relaxation as you watch the marine life below.</p>
                    </div>
                    <div className="flex gap-4 justify-between">
                        <div>
                            <p>Tourists Spot Name:</p>
                            <p>Cox'bazar</p>
                        </div>
                        <div>
                            <p>Country Name:</p>
                            <p>Bangladesh</p>
                        </div>
                        <div>
                            <p>Location:</p>
                            <p>Sentmartin</p>
                        </div>
                        <div>
                            <p>Description:</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <p>Average Cost:</p>
                            <p>20,0000</p>
                        </div>
                        <div>
                            <p>Average Cost:</p>
                            <p>20,0000</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Details;