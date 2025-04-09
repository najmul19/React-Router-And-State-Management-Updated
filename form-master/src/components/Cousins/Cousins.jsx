import Friend from "../Friend/Friend";
import Special from "../Special/Special";


const Cousins = ({name, asset}) => {
    return (
        <div>
            <h2>Cousins</h2>
            <p>{name}</p>
            <section>
                { asset && <Special asset={asset}>

                </Special>}
                {
                    name==='mu' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousins;