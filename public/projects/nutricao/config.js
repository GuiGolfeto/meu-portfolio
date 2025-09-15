// ==========================
// CONFIGURAÇÕES RÁPIDAS
// ==========================
const CONFIG = {
    PROFESSIONAL_NAME: 'Dra. Nome Sobrenome',
    WHATSAPP_NUMBER: '+55 11 90000-0000', // use formato internacional
    WHATSAPP_DEFAULT_MSG: 'Olá! Gostaria de agendar minha primeira consulta.',
    APPOINTMENT_URL: '', // Se você usa Agenda de compromissos do Google, cole a URL (ex.: https://calendar.app.google/XXXXX)
    ADDRESS: 'Rua Exemplo, 123 — São Paulo/SP',
    DEFAULT_DURATION_MIN: 50
};

// Utilitários
const $ = sel => document.querySelector(sel);
const encode = str => encodeURIComponent(str || '');

// WhatsApp link
function buildWhatsLink() {
    const phone = CONFIG.WHATSAPP_NUMBER.replace(/\D/g, '');
    const text = encode(CONFIG.WHATSAPP_DEFAULT_MSG);
    return `https://wa.me/${phone}?text=${text}`;
}

// Agenda (1) — Se APPOINTMENT_URL estiver definido, usar direto
function openAppointment() {
    if (CONFIG.APPOINTMENT_URL) {
        window.open(CONFIG.APPOINTMENT_URL, '_blank', 'noopener');
        return;
    }
    // Caso contrário, rolar para o formulário de evento rápido
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}

// Agenda (2) — Criador de evento rápido (abre a Agenda do cliente já preenchida)
function handleCalendarForm(e) {
    e.preventDefault();
    const nome = $('#nome').value.trim();
    const data = $('#data').value; // yyyy-mm-dd
    const hora = $('#hora').value; // HH:MM
    if (!nome || !data || !hora) return;

    const start = new Date(`${data}T${hora}:00`);
    const end = new Date(start.getTime() + CONFIG.DEFAULT_DURATION_MIN * 60000);

    const fmt = d => {
        const pad = n => String(n).padStart(2, '0');
        return (
            d.getFullYear() +
            pad(d.getMonth() + 1) +
            pad(d.getDate()) + 'T' +
            pad(d.getHours()) +
            pad(d.getMinutes()) +
            '00'
        );
    };

    const dates = `${fmt(start)}/${fmt(end)}`; // sem Z para considerar fuso local
    const title = `Primeira consulta — ${CONFIG.PROFESSIONAL_NAME}`;
    const details = `Consulta inicial com ${CONFIG.PROFESSIONAL_NAME}. Agendada via landing page.`;
    const location = CONFIG.ADDRESS;

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encode(title)}&dates=${dates}&details=${encode(details)}&location=${encode(location)}`;
    window.open(url, '_blank', 'noopener');
}

// Prepara links e ações
function init() {
    // Ano no rodapé
    $('#year').textContent = new Date().getFullYear();

    // WhatsApp
    const whats = buildWhatsLink();
    $('#btn-whats-hero').href = whats;
    $('#btn-whats-strip').href = whats;
    $('#fab-whats').href = whats;

    // Agendar
    $('#btn-agendar-hero').addEventListener('click', (e) => { e.preventDefault(); openAppointment(); });
    $('#btn-agendar-strip').addEventListener('click', (e) => { e.preventDefault(); openAppointment(); });

    // Formulário Google Agenda
    $('#form-cal').addEventListener('submit', handleCalendarForm);
    $('#limpar').addEventListener('click', () => {
        $('#form-cal').reset();
    });

    // Rolagem suave das âncoras
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const id = a.getAttribute('href');
            if (id.length > 1) {
                e.preventDefault();
                const el = document.querySelector(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', init);