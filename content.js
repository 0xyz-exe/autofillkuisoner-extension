// AutofillKuisoner Content Script - Enhanced for Essay Forms
class AutofillKuisoner {
    constructor() {
        this.surveyResponses = {
            // Original survey responses
            kepribadian: [
                "Dosen menunjukkan sikap yang dewasa, arif, dan berwibawa dalam setiap pembelajaran.",
                "Dosen memiliki akhlak mulia dan dapat menjadi teladan bagi mahasiswa.",
                "Dosen menunjukkan etos kerja yang tinggi dan tanggung jawab yang besar.",
                "Dosen bersikap inklusif, bertindak objektif, serta tidak diskriminatif.",
                "Dosen berkomunikasi secara efektif, empatik, dan santun dengan mahasiswa."
            ],
            sosial: [
                "Dosen mampu berkomunikasi dengan baik kepada mahasiswa dan sesama dosen.",
                "Dosen dapat berinteraksi dengan efektif dengan mahasiswa dari berbagai latar belakang.",
                "Dosen menunjukkan kemampuan bekerja sama dalam tim pengajar.",
                "Dosen berpartisipasi aktif dalam kegiatan akademik dan kemahasiswaan.",
                "Dosen memiliki kepekaan sosial yang tinggi terhadap lingkungan kampus."
            ],
            profesional: [
                "Dosen menguasai materi pembelajaran dengan sangat baik dan mendalam.",
                "Dosen selalu mengikuti perkembangan terbaru dalam bidang keilmuannya.",
                "Dosen mampu mengintegrasikan teori dengan praktik secara efektif.",
                "Dosen menggunakan teknologi pembelajaran dengan baik dan inovatif.",
                "Dosen memberikan referensi yang relevan dan up-to-date."
            ],
            pedagogik: [
                "Dosen memahami karakteristik mahasiswa dengan baik dan memberikan pendekatan yang sesuai.",
                "Dosen merancang pembelajaran yang sistematis dan terstruktur dengan baik.",
                "Dosen menggunakan metode pembelajaran yang bervariasi dan menarik.",
                "Dosen memberikan evaluasi yang objektif dan memberikan feedback yang konstruktif.",
                "Dosen menciptakan suasana pembelajaran yang aktif dan partisipatif."
            ],
            saran: [
                "Secara keseluruhan, dosen sudah memberikan pembelajaran yang berkualitas dan sesuai dengan standar akademik.",
                "Diharapkan dosen dapat terus meningkatkan kualitas pembelajaran dengan mengikuti perkembangan teknologi terbaru.",
                "Pembelajaran sudah baik, namun akan lebih optimal jika ditambahkan lebih banyak contoh kasus praktis.",
                "Dosen sudah sangat baik dalam menyampaikan materi, diharapkan dapat mempertahankan kualitas ini."
            ],
            
            // NEW: Essay-specific responses
            essay: [
                "Menurut saya, kinerja dosen dalam proses pembelajaran sudah sangat baik. Dosen menunjukkan penguasaan materi yang mendalam dan mampu menyampaikan konsep-konsep yang kompleks dengan cara yang mudah dipahami. Metode pembelajaran yang digunakan juga bervariasi dan interaktif, sehingga mahasiswa tidak merasa bosan dan tetap terlibat aktif dalam proses pembelajaran. Selain itu, dosen juga selalu memberikan feedback yang konstruktif terhadap tugas dan pertanyaan yang diajukan mahasiswa.",
                
                "Berdasarkan pengamatan selama proses pembelajaran, dosen telah menunjukkan profesionalisme yang tinggi. Persiapan materi pembelajaran sangat baik, dengan referensi yang relevan dan up-to-date. Dosen juga mampu menciptakan suasana kelas yang kondusif untuk belajar, dimana mahasiswa merasa nyaman untuk bertanya dan berdiskusi. Komunikasi yang efektif dan pendekatan yang personal membuat mahasiswa lebih mudah memahami materi yang diajarkan.",
                
                "Saya mengapresiasi cara dosen dalam menyampaikan materi pembelajaran. Dosen tidak hanya fokus pada transfer pengetahuan, tetapi juga membantu mahasiswa mengembangkan kemampuan berpikir kritis dan analitis. Penggunaan studi kasus dan contoh-contoh nyata membuat pembelajaran menjadi lebih aplikatif dan relevan dengan dunia kerja. Dosen juga sangat responsif terhadap pertanyaan dan memberikan penjelasan tambahan ketika diperlukan.",
                
                "Kinerja dosen dalam aspek akademik sudah sangat memuaskan. Dosen menunjukkan komitmen yang tinggi terhadap proses pembelajaran, selalu hadir tepat waktu, dan memberikan materi sesuai dengan silabus yang telah ditetapkan. Evaluasi pembelajaran juga dilakukan secara objektif dan transparan. Dosen juga mendorong mahasiswa untuk aktif berpartisipasi dalam diskusi dan presentasi, sehingga pembelajaran menjadi lebih dinamis dan interaktif."
            ],
            
            // Performance-related responses
            kinerja: [
                "Kinerja dosen dalam proses pembelajaran sangat baik dan profesional. Dosen menunjukkan penguasaan materi yang mendalam, kemampuan komunikasi yang efektif, dan dedikasi yang tinggi terhadap mahasiswa. Metode pembelajaran yang digunakan bervariasi dan mampu mengakomodasi berbagai gaya belajar mahasiswa.",
                
                "Berdasarkan pengalaman mengikuti mata kuliah ini, saya dapat menyimpulkan bahwa kinerja dosen sudah sangat optimal. Dosen tidak hanya memberikan materi secara teoritis, tetapi juga menghubungkannya dengan aplikasi praktis di dunia kerja. Hal ini membuat pembelajaran menjadi lebih bermakna dan relevan bagi mahasiswa.",
                
                "Dosen menunjukkan kinerja yang konsisten dan berkualitas sepanjang semester. Persiapan materi pembelajaran yang matang, penggunaan media pembelajaran yang tepat, dan kemampuan mengelola kelas dengan baik menjadi kelebihan yang patut diapresiasi. Dosen juga selalu terbuka terhadap feedback dari mahasiswa untuk perbaikan pembelajaran ke depannya."
            ],
            
            // Improvement suggestions
            peningkatan: [
                "Untuk meningkatkan kualitas pembelajaran, saya menyarankan agar dosen dapat menambahkan lebih banyak studi kasus terkini yang relevan dengan perkembangan industri. Hal ini akan membantu mahasiswa memahami aplikasi teori dalam konteks yang lebih nyata dan praktis.",
                
                "Beberapa saran untuk peningkatan: pertama, penambahan sesi praktik atau workshop yang lebih intensif; kedua, penggunaan teknologi pembelajaran yang lebih interaktif seperti simulasi atau virtual lab; ketiga, pemberian proyek kolaboratif yang melibatkan kerjasama antar mahasiswa untuk mengembangkan soft skills.",
                
                "Meskipun kinerja dosen sudah sangat baik, masih ada ruang untuk perbaikan. Saya menyarankan agar dosen dapat memberikan lebih banyak kesempatan untuk diskusi kelompok kecil, sehingga mahasiswa yang introvert juga dapat berpartisipasi aktif. Selain itu, penambahan materi pengayaan untuk mahasiswa yang memiliki minat lebih dalam pada topik tertentu juga akan sangat bermanfaat."
            ]
        };

        this.satisfactionLevels = ['Sangat Puas', 'Puas', 'Tidak Puas', 'Sangat Tidak Puas'];
        this.filledFields = new Set();
        this.settings = {
            randomizeResponses: true,
            highlightFields: true,
            showNotifications: true
        };

        this.init();
    }

    init() {
        this.setupMessageListener();
        this.setupKeyboardShortcuts();
        this.loadSettings();
    }

    setupMessageListener() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            switch (request.action) {
                case 'getStatus':
                    sendResponse(this.getStatus());
                    break;
                case 'fillAll':
                    this.executeAction('fillAll', request.settings, sendResponse);
                    break;
                case 'fillRatings':
                    this.executeAction('fillRatings', request.settings, sendResponse);
                    break;
                case 'fillText':
                    this.executeAction('fillText', request.settings, sendResponse);
                    break;
                case 'clearAll':
                    this.executeAction('clearAll', request.settings, sendResponse);
                    break;
            }
            return true;
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'F') {
                e.preventDefault();
                this.fillAll();
            }
        });
    }

    async executeAction(action, settings, sendResponse) {
        this.settings = { ...this.settings, ...settings };
        
        try {
            let result;
            switch (action) {
                case 'fillAll':
                    result = await this.fillAll();
                    break;
                case 'fillRatings':
                    result = await this.fillRatings();
                    break;
                case 'fillText':
                    result = await this.fillText();
                    break;
                case 'clearAll':
                    result = await this.clearAll();
                    break;
            }
            
            sendResponse({
                success: true,
                message: result.message,
                stats: this.getStats()
            });
        } catch (error) {
            sendResponse({
                success: false,
                message: 'Terjadi kesalahan: ' + error.message,
                stats: this.getStats()
            });
        }
    }

    async fillAll() {
        const textFields = await this.fillText();
        const ratingFields = await this.fillRatings();
        const checkboxFields = await this.fillCheckboxes();
        
        const totalFilled = textFields.count + ratingFields.count + checkboxFields.count;
        
        if (this.settings.showNotifications) {
            this.showNotification(`Berhasil mengisi ${totalFilled} field!`, 'success');
        }
        
        return {
            count: totalFilled,
            message: `Berhasil mengisi ${totalFilled} field!`
        };
    }

    async fillText() {
        const textareas = document.querySelectorAll('textarea');
        let filledCount = 0;
        
        for (const textarea of textareas) {
            const fieldType = this.analyzeTextField(textarea);
            console.log('Field type detected:', fieldType, 'for element:', textarea);
            
            if (fieldType && this.surveyResponses[fieldType]) {
                const response = this.getRandomResponse(fieldType);
                if (this.fillField(textarea, response)) {
                    filledCount++;
                    await this.delay(200); // Longer delay for essay forms
                }
            }
        }
        
        return {
            count: filledCount,
            message: `Berhasil mengisi ${filledCount} field teks!`
        };
    }

    analyzeTextField(field) {
        const context = this.getFieldContext(field).toLowerCase();
        console.log('Context for field:', context);
        
        // Check for essay-specific patterns
        if (context.includes('esai') || context.includes('essay')) {
            return 'essay';
        }
        
        // Check for performance-related questions
        if (context.includes('kinerja') || context.includes('performance')) {
            return 'kinerja';
        }
        
        // Check for improvement suggestions
        if (context.includes('peningkatan') || context.includes('saran') || 
            context.includes('usulkan') || context.includes('harapan')) {
            return 'peningkatan';
        }
        
        // Check for general suggestions
        if (context.includes('saran') || context.includes('masukan')) {
            return 'saran';
        }
        
        // Original competency checks
        if (context.includes('kepribadian')) return 'kepribadian';
        if (context.includes('sosial')) return 'sosial';
        if (context.includes('profesional')) return 'profesional';
        if (context.includes('pedagogik')) return 'pedagogik';
        
        // Default to essay for unknown fields
        return 'essay';
    }

    getFieldContext(field) {
        let context = '';
        
        // Get text from the field's label, placeholder, and nearby elements
        if (field.placeholder) {
            context += field.placeholder + ' ';
        }
        
        // Get text from associated labels
        if (field.id) {
            const label = document.querySelector(`label[for="${field.id}"]`);
            if (label) {
                context += label.textContent + ' ';
            }
        }
        
        // Get text from parent elements (more comprehensive)
        let parent = field.parentElement;
        for (let i = 0; i < 5 && parent; i++) {
            const parentText = parent.textContent || '';
            context += parentText + ' ';
            parent = parent.parentElement;
        }
        
        // Get text from preceding elements
        let sibling = field.previousElementSibling;
        for (let i = 0; i < 3 && sibling; i++) {
            context += sibling.textContent || '';
            sibling = sibling.previousElementSibling;
        }
        
        return context;
    }

    async fillRatings() {
        const selects = document.querySelectorAll('select');
        let filledCount = 0;
        
        for (const select of selects) {
            if (this.isSatisfactionField(select)) {
                const level = this.getRandomSatisfactionLevel();
                if (this.fillSelectField(select, level)) {
                    filledCount++;
                    await this.delay(100);
                }
            }
        }
        
        return {
            count: filledCount,
            message: `Berhasil mengisi ${filledCount} rating!`
        };
    }

    async fillCheckboxes() {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        let filledCount = 0;
        
        for (const checkbox of checkboxes) {
            if (!checkbox.checked) {
                checkbox.checked = true;
                this.triggerFieldEvents(checkbox);
                filledCount++;
                await this.delay(50);
            }
        }
        
        return {
            count: filledCount,
            message: `Berhasil menandai ${filledCount} item!`
        };
    }

    async clearAll() {
        let clearedCount = 0;
        
        this.filledFields.forEach(field => {
            if (field.tagName === 'SELECT') {
                field.selectedIndex = 0;
            } else if (field.type === 'checkbox') {
                field.checked = false;
            } else {
                field.value = '';
            }
            this.triggerFieldEvents(field);
            clearedCount++;
        });
        
        this.filledFields.clear();
        
        return {
            count: clearedCount,
            message: `Berhasil membersihkan ${clearedCount} field!`
        };
    }

    isSatisfactionField(select) {
        const options = Array.from(select.options);
        return options.some(opt => 
            opt.text.toLowerCase().includes('puas') ||
            opt.text.toLowerCase().includes('satisfied')
        );
    }

    getRandomResponse(fieldType) {
        const responses = this.surveyResponses[fieldType];
        if (this.settings.randomizeResponses) {
            return responses[Math.floor(Math.random() * responses.length)];
        }
        return responses[0];
    }

    getRandomSatisfactionLevel() {
        if (this.settings.randomizeResponses) {
            const random = Math.random();
            if (random < 0.4) return 'Sangat Puas';
            if (random < 0.7) return 'Puas';
            if (random < 0.9) return 'Tidak Puas';
            return 'Sangat Tidak Puas';
        }
        return 'Puas';
    }

    fillField(field, value) {
        if (!field || field.disabled || field.readOnly) return false;
        
        try {
            field.value = value;
            this.triggerFieldEvents(field);
            
            if (this.settings.highlightFields) {
                this.highlightField(field);
            }
            
            this.filledFields.add(field);
            return true;
        } catch (error) {
            console.error('Error filling field:', error);
            return false;
        }
    }

    fillSelectField(field, value) {
        const options = Array.from(field.options);
        const matchedOption = options.find(opt => 
            opt.text.includes(value) || opt.value === value
        );
        
        if (matchedOption) {
            field.value = matchedOption.value;
            this.triggerFieldEvents(field);
            
            if (this.settings.highlightFields) {
                this.highlightField(field);
            }
            
            this.filledFields.add(field);
            return true;
        }
        
        return false;
    }

    triggerFieldEvents(field) {
        ['input', 'change', 'blur', 'keyup'].forEach(eventType => {
            field.dispatchEvent(new Event(eventType, { bubbles: true }));
        });
    }

    highlightField(field) {
        const original = field.style.backgroundColor;
        field.style.backgroundColor = '#e8f5e8';
        field.style.transition = 'background-color 0.3s ease';
        
        setTimeout(() => {
            field.style.backgroundColor = original;
        }, 2000);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `autofill-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed !important;
            top: 20px !important;
            right: 20px !important;
            padding: 12px 16px !important;
            border-radius: 6px !important;
            color: white !important;
            font-family: Arial, sans-serif !important;
            font-size: 14px !important;
            z-index: 10000 !important;
            max-width: 300px !important;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
        `;
        
        switch (type) {
            case 'success':
                notification.style.backgroundColor = '#4CAF50';
                break;
            case 'error':
                notification.style.backgroundColor = '#f44336';
                break;
            default:
                notification.style.backgroundColor = '#2196F3';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    getStatus() {
        return {
            success: true,
            stats: this.getStats()
        };
    }

    getStats() {
        const totalFields = document.querySelectorAll('input, select, textarea').length;
        return {
            totalFields,
            filledFields: this.filledFields.size,
            fillPercentage: totalFields > 0 ? Math.round((this.filledFields.size / totalFields) * 100) : 0
        };
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loadSettings() {
        try {
            const result = await chrome.storage.sync.get([
                'randomizeResponses',
                'highlightFields',
                'showNotifications'
            ]);
            
            this.settings = {
                randomizeResponses: result.randomizeResponses !== false,
                highlightFields: result.highlightFields !== false,
                showNotifications: result.showNotifications !== false
            };
        } catch (error) {
            console.error('Error loading settings:', error);
        }
    }
}

// Initialize the autofill system
const autofillKuisoner = new AutofillKuisoner();