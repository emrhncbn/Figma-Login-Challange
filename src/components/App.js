import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div className="flex min-h-screen">
            <div className="w-2/3">
                <img
                    src="https://s3-alpha-sig.figma.com/img/3c31/0ba2/38e30db0a856fb8528d2576ba8586101?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=obSCSeYH3VPt~zcQhPIaEngYzkgqumr~CzO9TOJzMBNQMM9fp3X5qcn7dn2-90rAT2OrEkIluCitx3YQIio4iEhEe-GdDbsUrRanEyvoWCwrws8kytJaubZfrqNFCiN4qjh6vkyjUpSwYnef3MIBT3YoKE9YRtSoSLt8iryUUg6-JRj37YZLM6VHPzwz60W62iinFchry4kJGuBTrcSsfHrMY7zTlZapAd0fbibPNorX01H51vUfNxdHZU1N0Hn6YPaRhcHxSXri1gGpGwd3tkUcfkJELHCCTKVurfuJQa8TiMaeQBbr6BqllQYwMp~yBqjrxVSq8G4hRJGg7qnryQ__"
                    className="w-full h-full object-cover"
                    alt="Background Image"
                />
            </div>
            <div className="w-1/3 flex flex-col justify-center items-start p-12">
                <h1 className="text-[#36925afb] text-4xl font-bold mb-7">Sign In</h1>
                <input
                    type="text"
                    placeholder="Username"
                    className="border-2 border-gray-500 rounded-md p-2 mb-7 w-[400px] h-[50px]"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border-2 border-gray-500 rounded-md p-2 mb-7 w-[400px] h-[50px]"
                />
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <p>
                        I agree <strong>Terms and Conditions & Private Policy</strong> by Signing in
                    </p>
                </div>
                <div className="flex justify-center mt-10 w-[400px]">
                    <Link to="/farmanalytics">
                        <button className="bg-[#36925afb] text-white text-xl font-bold rounded-md p-2 w-[250px] h-[50px]">
                            Log In
                        </button>
                    </Link>
                </div>
                <div className="flex justify-center mt-5 w-[400px]">
                    <Link to="/signup">
                        <button className="text-[#36925afb] border-2 border-[#36925afb] text-xl font-bold rounded-md p-2 w-[250px] h-[50px]">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default App
