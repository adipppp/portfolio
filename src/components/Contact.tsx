
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-slate-800/40 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Mari Terhubung</h2>
        <p className="text-slate-400 text-center mb-10">
          Tertarik untuk bekerja sama atau memiliki pertanyaan? Tinggalkan pesan di bawah ini atau email langsung ke <a href="mailto:fernanda.nadhiftya@gmail.com" className="text-blue-400 hover:underline">fernanda.nadhiftya@gmail.com</a>.
        </p>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nama</label>
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="email@anda.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Pesan</label>
            <textarea 
              rows={4}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Apa yang bisa saya bantu?"
            ></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Send className="w-5 h-5" /> Kirim Pesan
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
