import { motion } from "motion/react";

export default function BookAppointment() {
    return (
        <main className="relative w-full min-h-screen pt-32 pb-24 flex flex-col items-center z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-4xl px-6"
            >
                <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Book an Appointment</h1>
                <p className="text-white/60 text-lg md:text-xl font-light">
                    Schedule a strategy call with our top engineers and designers.
                </p>
            </motion.div>
        </main>
    );
}
