
import './Main.css'
import { Section } from '../Section/Section'

export const Main = () => {
    return (
        <>
        <main className='main'>
            <Section>
                <img className="img_section" src="https://images.pexels.com/photos/19585496/pexels-photo-19585496/free-photo-of-bosque-animal-mascota-mono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""  />

            </Section>

            <Section>
                <div className='side2'>
                    <h1>Lorem</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, laboriosam? Voluptatibus necessitatibus fuga ipsam quas perferendis quod, harum veniam quidem temporibus corporis, eum quis culpa exercitationem sed voluptate impedit? Autem.</p>
                </div>
            </Section>
        </main>

        </>
    )
}