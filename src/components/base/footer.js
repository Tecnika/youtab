import { Container, Navbar, Button, ButtonGroup,ToggleButton } from "react-bootstrap";
import React, { useState } from 'react';
import '../../css/bootstrap/sketchy.scss'
// import '../../css/bootstrap/lux.scss'
function Footer() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('2');
  
    const radios = [
      { name: 'Lux', value: '1' },
      { name: 'Sketchy', value: '2' }
    ];
    return (
        <footer>
            <Navbar>
                <Container>
                    Футер
                    <div>Стиль:{' '}
                        <ButtonGroup>
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
                        </ButtonGroup>
                       </div>
                </Container>
            </Navbar>
        </footer>
    )
}
export default Footer;