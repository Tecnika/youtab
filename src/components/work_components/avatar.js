function Avatar({ name }) {
    if (name === undefined) {
        name = 'User'
    }
    if (name === '') {
        name = 'Google'
    }


    return (
        <img src={"https://source.boringavatars.com/bauhaus/24/" + { name } + "?colors=383838,515151,666666,C4C4C4,E7E7E7"} />
        // <img src={"https://source.boringavatars.com/bauhaus/24/" + { name } + "?colors=ecf8d4,e0deab,cb8e5f,85685a,0d0502"} />
    )
}
export default Avatar;