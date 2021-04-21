import React, {useState} from 'react'
import {DefaultButton, Input, LevelBox, Part, SmartInfo} from "../../component";
import aggnes from '../../assets/images/aggnes.png'
import memphyusCard from '../../assets/images/memphyus-card.PNG'
import aggnesCard from '../../assets/images/aggnes-card.PNG'
import saphireCard from '../../assets/images/saphire-card.PNG'
import atilaCard from '../../assets/images/atila-card.PNG'
import {Card} from "../../component/cards/card.component";

import './character.style.scss'

const character = {
    name: "Carpir",
    level: 32,
    xp: 32450,
    coins: 2200.0
}

const characterChoice = [
    {
        name: "Aggnes",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: aggnesCard
    },
    {
        name: "Saphire",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: saphireCard
    },
    {
        name: "Asttrom",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: memphyusCard
    },
    {
        name: "Átila",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: atilaCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: memphyusCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: atilaCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: aggnesCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: saphireCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: memphyusCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: saphireCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: aggnesCard
    },
    {
        name: "Memphyus",
        life: 100,
        shield: 80,
        power: "Laser",
        forcePower: 50,
        subpower: "Laser Magnum",
        forceSubpower: 60,
        timeRecharge: 2000,
        phrase: "A woman determined to burn the eyes of those who pass in front of her.",
        photo: aggnes,
        card: saphireCard
    },

]

export const Character = () => {
    const [choicedCharacter, setChoicedCharacter] = useState(characterChoice[0])

    const CharacterCard = () => {
        return characterChoice.map(character => {
            return (
                <Card backgroundImage={character.card}
                               classname="character__first-section__character-panel__registry-character__cards__character-card"/>
            )
        })
    }

    return (
        <div className="character">
            <div className="character__first-section">
                <LevelBox character={character} classname="character__first-section__level-box"/>
                <div className="character__first-section__character-visualization">
                    <div className="character__first-section__character-visualization__light">

                    </div>
                    <div className="character__first-section__character-visualization__podium">

                    </div>
                </div>
                <SmartInfo character={choicedCharacter}/>
            </div>
            <div className="character__first-section__character-panel">
                <div className="character__first-section__character-panel">
                    <Part classname="character__first-section__character-panel__part-left-side" variant="left"/>
                    <div className="character__first-section__character-panel__registry-character">
                        <div className="character__first-section__character-panel__registry-character__cards">
                            <CharacterCard />
                        </div>
                        <Input classname="character__first-section__character-panel__registry-character__input-name"/>
                        <DefaultButton classname="character__first-section__character-panel__registry-character__button-registry">CADASTRAR</DefaultButton>
                    </div>
                    <Part classname="character__first-section__character-panel__part-right-side" variant="right"/>
                </div>
            </div>
        </div>
    )
}