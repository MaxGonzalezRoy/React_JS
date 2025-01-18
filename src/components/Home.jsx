import React from 'react';

const Home = () => {
    return (
        <div className="container my-5">
            {/* Título principal */}
            <h1 className="display-4 text-center mb-4">Bienvenido a Nuestra Tienda</h1>
            
            {/* Descripción introductoria */}
            <p className="lead text-center mb-5">
                Explora una amplia variedad de productos de alta calidad y encuentra lo que mejor se adapte a tus necesidades.
                ¡Tu próxima compra te está esperando!
            </p>
            
            {/* Sección de productos destacados */}
            <section className="mt-5">
                <h2 className="h4 mb-4 text-center">Productos Destacados</h2>
                <div className="row">
                    {/* Producto 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img 
                                src="https://via.placeholder.com/200" 
                                className="card-img-top" 
                                alt="Producto 1" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">Producto 1</h5>
                                <p className="card-text">Descripción breve del producto. ¡No te lo pierdas!</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Producto 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img 
                                src="https://via.placeholder.com/200" 
                                className="card-img-top" 
                                alt="Producto 2" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">Producto 2</h5>
                                <p className="card-text">Descripción breve del producto. ¡No te lo pierdas!</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>

                    {/* Producto 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card">
                            <img 
                                src="https://via.placeholder.com/200" 
                                className="card-img-top" 
                                alt="Producto 3" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">Producto 3</h5>
                                <p className="card-text">Descripción breve del producto. ¡No te lo pierdas!</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de beneficios o características */}
            <section className="mt-5">
                <h2 className="h4 mb-4 text-center">¿Por qué elegirnos?</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-4">
                            <h5 className="card-title">Envíos rápidos</h5>
                            <p className="card-text">
                                Disfruta de envíos rápidos y seguros, con opciones de seguimiento en tiempo real.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-4">
                            <h5 className="card-title">Pago seguro</h5>
                            <p className="card-text">
                                Ofrecemos métodos de pago seguros para que puedas comprar con tranquilidad.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-4">
                            <h5 className="card-title">Soporte al cliente</h5>
                            <p className="card-text">
                                Nuestro equipo de soporte está disponible para ayudarte en todo momento.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Llamado a la acción */}
            <section className="mt-5 text-center">
                <a href="#" className="btn btn-success btn-lg">Ver más productos</a>
            </section>
        </div>
    );
};

export default Home;
