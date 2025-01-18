import React from 'react';

const About = () => {
    return (
        <div className="container my-5">
            <h1 className="display-4 text-center mb-4">Acerca de Nosotros</h1>
            <p className="lead text-center mb-5">
                Bienvenido a nuestra tienda en línea, donde podrás encontrar una variedad de productos
                cuidadosamente seleccionados para ofrecerte lo mejor. Nuestro objetivo es brindarte
                una experiencia de compra cómoda, confiable y con atención al cliente de primera.
            </p>
            
            <section>
                <h2 className="h4">¿Quiénes somos?</h2>
                <p>
                    Somos un equipo apasionado por la tecnología y el comercio en línea. Nos dedicamos
                    a ofrecer productos innovadores que cubren las necesidades de nuestros clientes,
                    desde lo más nuevo en gadgets hasta artículos de uso cotidiano.
                </p>
            </section>

            <section className="mt-4">
                <h2 className="h4">Nuestra Misión</h2>
                <p>
                    Nuestra misión es proporcionar a nuestros clientes productos de calidad a precios
                    competitivos, asegurando una experiencia de compra ágil y confiable. Trabajamos con
                    marcas reconocidas para garantizar la satisfacción total de quienes confían en nosotros.
                </p>
            </section>

            <section className="mt-4">
                <h2 className="h4">¿Por qué elegirnos?</h2>
                <ul>
                    <li>Envíos rápidos y seguros.</li>
                    <li>Atención al cliente personalizada.</li>
                    <li>Precios competitivos y descuentos exclusivos.</li>
                    <li>Variedad de productos para todos los gustos y necesidades.</li>
                </ul>
            </section>

            <section className="mt-5">
                <h2 className="h4">Contáctanos</h2>
                <p>Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nosotros.</p>
            </section>
        </div>
    );
};

export default About;
