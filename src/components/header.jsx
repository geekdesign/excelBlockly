import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="bg-gray-700 shadow-lg h-16">
                <div className="max-w-10xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <div>
                                <h3 className="text-white text-xl font-semibold" >ExcelBlockly</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
