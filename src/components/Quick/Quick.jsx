
const Quick = () => {
    return (
        <div className="mt-20 text-black px-6 lg:px-0">
            <h3 className="text-4xl font-bold mb-2 font">Quick & Easy Trip</h3>
            <p>Promotions, deals, and special offers for you</p>
            <div role="tablist" className="tabs tabs-bordered mt-5">
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="City" />
                <div role="tabpanel" className="tab-content p-10">City</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Beach" checked />
                <div role="tabpanel" className="tab-content p-10">Beach</div>

                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Romance" />
                <div role="tabpanel" className="tab-content p-10">Romance</div>
            </div>
        </div>
    );
};

export default Quick;