import vue from '../../assets/images/vue-js.jpg'
import node from '../../assets/images/node-js.jpg'
import flutter from '../../assets/images/flutter.jpg'
import react from '../../assets/images/react.jpg'
import figma from '../../assets/images/figma--v1.jpg'
import laravel from '../../assets/images/laravel.jpg'

const Techonology = () => {
    const technologies = [
        { id: 1, title: "Vue JS", img: vue },
        { id: 2, title: "Node JS", img: node },
        { id: 3, title: "Flutter", img: flutter },
        { id: 4, title: "React JS", img: react },
        { id: 5, title: "Figma", img: figma },
        { id: 6, title: "Laravel", img: laravel },
    ];

    return (
        <div className="px-6 lg:px-16 py-12">
            <div className="text-center mb-10 max-w-xl mx-auto">
                <h2 className="text-2xl font-semibold">
                    <span className="text-[#FA8370]">Technology</span> We Use
                </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8">
                {technologies.map(tech => (
                    <div key={tech.id} className="flex flex-col items-center text-center">
                        <img
                            src={tech.img}
                            alt={tech.title}
                            className="w-12 h-12 object-contain mb-2"
                        />
                        <p className="text-sm font-medium text-gray-700">{tech.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Techonology;
