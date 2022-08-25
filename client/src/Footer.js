function Footer() {
    return (
        <footer class="p-4 bg-black md:flex md:items-center md:justify-between md:p-2 mt-16 fixed w-screen bottom-0 font-semibold">
            <span class="text-sm text-white sm:text-center">Created by Aaron Wertheim</span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-white sm:mt-0">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="https://github.com/aaronwertheim/Auditions" target="blank" class="mr-4 hover:underline md:mr-6 ">GitHub</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aaron-wertheim/" target="blank" class="mr-4 hover:underline md:mr-6">LinkedIn</a>
                </li>
                <li>
                    <a href = "mailto: aawertheim@gmail.com" class="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
    )
}
export default Footer;