import React from 'react';

const Location = () => {
    return (
        <div className="location_main">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center mb-5">Bizning manzil</h1>
                    </div>
                </div>
            </div>
            <div className="container_fluid">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.190116034647!2d69.22629601479474!3d41.326479107732894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bb7a0ebbae3%3A0xf9e01b5d45fc68cd!2sPDP%20Academy!5e0!3m2!1sru!2s!4v1627635533436!5m2!1sru!2s"
                    width="600" height="450" className="w-100 border-0" allowFullScreen="" loading="lazy"/>
            </div>
        </div>
    );
};

export default Location;