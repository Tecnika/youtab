import { Container, Navbar, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import React, { useState } from 'react';
import '../../bootstrap/sketchy.scss'
// import '../../bootstrap/lux.scss'
// const StyleSketchy = React.lazy(() => import('../../bootstrap/sketchy_style'));
// const StyleLux = React.lazy(() => import('../../bootstrap/lux_style'));



function Footer() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('2');

    const radios = [
        { name: 'Lux', value: '1' },
        { name: 'Sketchy', value: '2' }
    ];
    // const onChange = (value) => {
      //     if (value === '2' )
    //         <StyleSketchy/>
    //     else  {
    //         <StyleLux/>
            
    //     }}
    return (
        <footer>
            <Navbar>
                <Container>
                    Футер
                    <div>Стиль:{' '}
                        <ToggleButtonGroup type="radio" name="style" defaultValue={1} > {/* onChange={onChange} */}
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant='outline-primary'
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}

                        </ToggleButtonGroup>
                    </div>
                </Container>
            </Navbar>
        </footer>
    )
}
export default Footer;