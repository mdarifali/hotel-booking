
const Offers = () => {
    return (
        <div className="text-black px-6 lg:px-0">
            <h3 className="text-4xl font-bold mb-2 font">Offers</h3>
            <p>Promotions, deals, and special offers for you</p>
            <div className="grid lg:grid-cols-2 justify-between gap-5 items-center mt-5 ">
                <div className="card h-48 shadow-xl image-full"
                    style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="card-body">
                        <h2 className="card-title">New year, new adventures</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-sm rounded-full bg-white">Best Deals!</button>
                        </div>
                    </div>
                </div>
                <div className="card h-48  shadow-xl image-full "
                    style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                    <div className="card-body">
                        <h2 className="card-title">New year, new adventures</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-sm rounded-full bg-white">Best Deals!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;