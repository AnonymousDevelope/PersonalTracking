/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const Dropdown = ({ options, onChange,value }) => {
    const [isOpen, setIsOpen] = useState(false); // State to track if the dropdown is open
    const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term
    const [selectedOption, setSelectedOption] = useState(value); // Default selected option
    // Filter options based on the search term
    const filteredOptions =
        options &&
        options.filter((option) =>
            option.toLowerCase().includes(searchTerm.toLowerCase())
        );

    const handleOptionSelect = (option) => {
        setSearchTerm(""); // Clear search term
        setSelectedOption(option); // Update selected option
        setIsOpen(false); // Close dropdown
        if (onChange) onChange(option); // Call the onChange handler
    };

    return (
        <div className="relative">
            {/* Dropdown button */}
            <button
                onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
                className="w-full p-2 border flex flex-row items-center justify-between text-start rounded-full border-1 bg-primary-dark-custom border-light-custom focus:outline-none"
            >
                {selectedOption} {/* Show selected option */}
                <span className="ml-2 float-right">
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />} {/* Dropdown arrow */}
                </span>
            </button>

            {/* Dropdown content */}
            {isOpen && (
                <div className="absolute mt-2 w-full bg-primary-dark-custom border-0 rounded shadow-md z-10">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 border-b bg-transparent focus:outline-none"
                    />
                    {/* Options list */}
                    {filteredOptions.length > 0 ? (
                        <ul className="max-h-40 overflow-y-auto">
                            {filteredOptions.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleOptionSelect(option)}
                                    className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="p-4 text-center text-gray-500">
                            No results found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
