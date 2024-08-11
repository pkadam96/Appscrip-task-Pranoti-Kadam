import { useState } from 'react';
import '../css/sidebar.css';

const Sidebar = () => {
    const [openAccordions, setOpenAccordions] = useState({
        idealFor: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false,
        rawMaterials: false,
        pattern: false,
    });

    const toggleAccordion = (section) => {
        setOpenAccordions(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className='sidebarr'>
            <div className='custom checkbox'>
                <input type="checkbox" id="custom" name="custom" />
                <label htmlFor="custom">CUSTOMIZABLE</label>
            </div>

            <Accordion
                title="IDEAL FOR"
                isOpen={openAccordions.idealFor}
                toggle={() => toggleAccordion('idealFor')}
                items={['Men', 'Women', 'Kids']}
            />
            <Accordion
                title="OCCASION"
                isOpen={openAccordions.occasion}
                toggle={() => toggleAccordion('occasion')}
                items={['Casual', 'Formal', 'Party']}
            />
            <Accordion
                title="WORK"
                isOpen={openAccordions.work}
                toggle={() => toggleAccordion('work')}
                items={['Office', 'Home', 'Outdoor']}
            />
            <Accordion
                title="FABRIC"
                isOpen={openAccordions.fabric}
                toggle={() => toggleAccordion('fabric')}
                items={['Cotton', 'Polyester', 'Silk']}
            />
            <Accordion
                title="SEGMENT"
                isOpen={openAccordions.segment}
                toggle={() => toggleAccordion('segment')}
                items={['Segment 1', 'Segment 2', 'Segment 3']}
            />
            <Accordion
                title="RAW MATERIALS"
                isOpen={openAccordions.rawMaterials}
                toggle={() => toggleAccordion('rawMaterials')}
                items={['Material 1', 'Material 2', 'Material 3']}
            />
            <Accordion
                title="PATTERN"
                isOpen={openAccordions.pattern}
                toggle={() => toggleAccordion('pattern')}
                items={['Pattern 1', 'Pattern 2', 'Pattern 3']}
            />
        </div>
    );
};

const Accordion = ({ title, isOpen, toggle, items }) => {
    return (
        <div className='accordion'>
            <div className='accordion-header' onClick={toggle}>
                <span>{title}</span>
            </div>
            {isOpen && (
                <div className='accordion-content'>
                    {items.map((item, index) => (
                        <div className='checkbox' key={index}>
                            <input type="checkbox" id={item} name={item} />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export {Sidebar};
