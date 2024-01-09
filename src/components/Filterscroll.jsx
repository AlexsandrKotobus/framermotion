import { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";


const FilterScroll = ({datascroll}) => {

    const [cards, setCards] = useState(datascroll);
    const [selected, setSelected] = useState(0);
    const button = datascroll.reduce((acc, el) => {

        if(acc.includes(el.category)) return acc;
    return [...acc, el.category];

     }, ['all']);

     const handleFilter = (selector) => {
        if(selector === 'all') return setCards(datascroll)
     }











}