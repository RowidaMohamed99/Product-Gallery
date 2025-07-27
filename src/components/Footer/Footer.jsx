    export default function Footer() {
    return (
        <footer className="bg-slate-800 text-pink-500">
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center lg:text-left place-items-center">
            
            <div>
                <h2 className="text-2xl font-bold tracking-wide">Products Gallery</h2>
                <p className="text-sm mt-2 text-pink-300 ">
                Your one-stop shop for the best products online. Fast delivery, secure payments, and great deals daily!
                </p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                <ul className="space-y-2 text-sm text-pink-300">
                <li><a href="#" className="hover:text-pink-500 transition">Home</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Products</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">About</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                <div className="flex justify-center lg:justify-start text-pink-300 gap-4 text-xl">
                <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-pink-500 transition"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
            </div>

            <div className="text-center mt-8 text-xs text-pink-600 dark:text-pink-300 pt-4">
            &copy; {new Date().getFullYear()} Products Gallery. All rights reserved.
            </div>
        </div>
        </footer>
    );
    }
