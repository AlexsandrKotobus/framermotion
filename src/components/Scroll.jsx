import { AnimatePresence, motion } from "framer-motion"
// import {Scr} as "Scr" from './ButtScroll'
import { useRef } from 'react';

const textAnimation = {
    hidden: {
        x: -100,    opacity: 0,     },
        // мы добавили функцию задержки
    visible: custom => ({
        x: 0,       
        opacity: 1,
        transition: {delay: custom * 0.2}
    
    }),
}






function Scroll() {

    return(
        <div>
            <motion.section>
                <motion.div 
                
                initial = 'hidden'
                whileInView='visible'
                >
                    <motion.h1 custom={1}  variants={textAnimation}>
                        Header</motion.h1>
                        
                    <motion.p custom={2}  variants={textAnimation}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                        rhoncus quam.
                        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
                        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam
                        eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at
                        iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
                        eu tincidunt neque tincidunt a.
                    </motion.p>
                    {/* <Scr>fff</Scr> */}
                    {/* <ButtonScroll></ButtonScroll> */}
                </motion.div>
                    <h2 >1 Sub-header</h2>
                    <p>
                        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
                        tincidunt odio, sit amet laoreet massa fringilla eu.
                    <br/>
                        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
                        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
                        amet lacus mollis, semper massa ut, rutrum mi.
                    </p>
                    <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                    <p>
                        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
                        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                    </p>
                    <h2>2 Sub-header</h2>
                    <p>
                        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
                        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
                        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
                        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Pellentesque hendrerit ac augue quis pretium.
                    </p>
                    <p>
                        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                        ultricies, mollis mi in, euismod dolor.
                    </p>
                    <p>
                        Quisque convallis ligula non magna efficitur tincidunt.
                    </p>
                    <p>
                        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
                        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
                        amet lacus mollis, semper massa ut, rutrum mi.
                    </p>
                    <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                    <p>
                        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
                        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                    </p>
                    <h2>3 Sub-header</h2>
                    <p>
                        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
                        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
                        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
                        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Pellentesque hendrerit ac augue quis pretium.
                    </p>
                    <p>
                        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                        ultricies, mollis mi in, euismod dolor.
                    </p>
                    <p>
                        Quisque convallis ligula non magna efficitur tincidunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
                        rhoncus quam.
                    </p>
                    <p>
                        Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
                        imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam
                        eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at
                        iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
                        eu tincidunt neque tincidunt a.
                    </p>
                    <h2>4 Sub-header</h2>
                    <p>
                        In eget sodales arcu, consectetur efficitur metus. Duis efficitur
                        tincidunt odio, sit amet laoreet massa fringilla eu.
                    </p>
                    <p>
                        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
                        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
                        amet lacus mollis, semper massa ut, rutrum mi.
                    </p>
                    <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                    <p>
                        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
                        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                    </p>
                    <h2>5 Sub-header</h2>
                    <p>
                        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
                        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
                        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
                        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Pellentesque hendrerit ac augue quis pretium.
                    </p>
                    <p>
                        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                        ultricies, mollis mi in, euismod dolor.
                    </p>
                    <p>
                        Quisque convallis ligula non magna efficitur tincidunt.
                    </p>
                    <p>
                        Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris
                        id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit
                        amet lacus mollis, semper massa ut, rutrum mi.
                    </p>
                    <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
                    <p>
                        Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo
                        vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
                    </p>
                    <h2>6 Sub-header</h2>
                    <p>
                        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
                        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
                        sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus
                        ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel
                        felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis
                        in faucibus. Pellentesque hendrerit ac augue quis pretium.
                    </p>
                    <p>
                        Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
                        elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
                        ultricies, mollis mi in, euismod dolor.
                    </p>
                    <p>
                        Quisque convallis ligula non magna efficitur tincidunt.
                    </p>

            </motion.section>

                
            
        </div>
         )
}

export default Scroll;

