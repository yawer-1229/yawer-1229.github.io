export const profile = {
  name: 'Yawer Nazir',
  email: 'yawar1229@gmail.com',
  github: 'https://github.com/yawer-1229',
  linkedin: 'https://www.linkedin.com/in/yawer-nazir-213576250',
  cv: '/cv.pdf?v=20261001-coursework-v2',
};

export const publications = [
  { title: 'An Efficient Graph-Mamba Network for EEG Auditory Attention Decoding', venue: 'IEEE IC2E3 2026', status: 'Accepted', topic: 'Graph learning · EEG · Auditory attention', description: 'Exploring graph-based and state-space modeling for decoding auditory attention from EEG signals.' },
  { title: 'Cross-Stimulus EEG Representation Alignment for Auditory Attention Decoding Across Sessions', venue: 'ICASSP 2027', status: 'Submitted', topic: 'Representation learning · Multimodal AI', description: 'Investigating how EEG representations can be aligned across audiovisual stimuli and recording sessions.' },
];

export const projects = [
  { title: 'Beyond Signatures', subtitle: 'Semantic intelligence against generative malware evolution', category: 'AI & Security', year: '2026', description: 'A cross-modal transformer approach to analyzing evolving threat patterns and synthetic malware behavior.', tags: ['PyTorch', 'Transformers', 'DRAKVUF', 'LibVMI'], kind: 'security', note: 'Research project' },
  { title: 'Cloud-Native Malware Analysis Lab', subtitle: 'An environment for observing malicious behavior', category: 'Systems', year: '2025', description: 'A Docker-based malware sandbox on Google Cloud, with ELK Stack visualizations for exploring analysis data.', tags: ['Docker', 'Google Cloud', 'ELK Stack', 'Python'], kind: 'cloud', note: 'Security infrastructure' },
  { title: 'Kernel Watchtower', subtitle: 'eBPF-based rootkit detection', category: 'Systems', year: '2025', description: 'A Linux monitoring tool using eBPF and BCC to trace system calls and investigate rootkits and malicious behavior.', tags: ['eBPF', 'BCC', 'Linux', 'Python'], kind: 'terminal', note: 'Systems security', url: 'https://github.com/yawer-1229/Kernel_Watch-tower' },
  { title: 'Smart Parking Management', subtitle: 'Real-time occupancy monitoring', category: 'Embedded', year: '2024', description: 'An Arduino Uno prototype using an HC-SR04 ultrasonic sensor to monitor parking-space occupancy in real time.', tags: ['Arduino', 'C++', 'IoT'], kind: 'embedded', note: 'Embedded systems', url: 'https://github.com/yawer-1229/Smart_Parking_System_IoT' },
];

export const skills = [
  { title: 'Cybersecurity & systems', items: ['Network security', 'Cryptography', 'Computer networks', 'Linux administration', 'eBPF / BCC', 'Xen', 'DRAKVUF', 'LibVMI', 'Wireshark', 'Ghidra', 'Metasploit'] },
  { title: 'Programming & computer science', items: ['Python', 'C', 'C++', 'Java', 'SQL', 'Bash scripting', 'PHP', '8086 Assembly', 'Data structures & algorithms', 'Database design'] },
  { title: 'Machine learning & computer vision', items: ['PyTorch', 'TensorFlow', 'Keras', 'scikit-learn', 'Hugging Face Transformers', 'PyTorch Geometric', 'Graph neural networks', 'OpenCV', 'MNE-Python'] },
  { title: 'NLP & large language models', items: ['Retrieval-augmented generation', 'BERT', 'Semantic search', 'Vector databases', 'LLM applications'] },
  { title: 'Cloud & development tools', items: ['Google Cloud Platform', 'AWS (basic)', 'Docker', 'Kubernetes', 'Git & GitHub', 'ELK Stack'] },
  { title: 'Research methods & embedded systems', items: ['Representation learning', 'Multimodal fusion', 'Statistical evaluation', 'Optimization', 'Arduino', 'Embedded C++'] },
];

export const education = [
  { level: 'Bachelor of Technology', degree: 'Computer Science & Engineering', institution: 'Central University of Kashmir', period: '2022–2026', location: 'Ganderbal, Jammu & Kashmir, India', result: 'Percentage: 74%', detail: 'Computer Programming, Object Oriented Programming, Data Structures, Design and Analysis of Algorithms, Operating Systems, Database Management Systems, Computer Networks, Network Security, Artificial Intelligence, Machine Learning, Deep Learning, Discrete Structures, and Mathematics (Differential Equations, Probability and Statistics).', programming: 'C, C++, Java, and Python.' },
  { level: 'Higher secondary · Class XII', degree: 'Higher Secondary School Examination', institution: 'Space Age Higher Secondary School', period: 'Completed 2020', location: 'Srinagar, Jammu & Kashmir, India', result: 'Percentage: 82% · Grade: 8.6', detail: 'Science stream with Physics, Chemistry, and Mathematics (PCM).' },
  { level: 'Secondary · Class X', degree: 'Secondary School Examination', institution: 'New Generation Public School', period: 'Completed 2018', location: 'Srinagar, Jammu & Kashmir, India', result: 'CGPA: 9.8 / 10.0', detail: 'Completed secondary school education in 2018.' },
];

export const leadership = [
  { title: 'Conference Session Moderator', organization: 'International Conference on Applied Artificial Intelligence (2AI 2026)', date: 'June 2026', description: 'Moderated technical paper presentations at Central University of Kashmir. Received a Certificate of Appreciation for service as a session moderator.' },
  { title: 'Institute Ambassador', organization: 'DEFCON Srinagar', date: '2025', description: 'Represented Central University of Kashmir and organized capture-the-flag competitions and security workshops for more than 100 students.' },
  { title: 'Head, University Research Club', organization: 'Central University of Kashmir', description: 'Coordinated research workshops and seminars, and mentored peers in research methods and academic writing.' },
  { title: 'Event Coordinator', organization: 'Cyber Conclave', date: '2025', description: 'Managed logistics and speaker sessions for the university cybersecurity summit.' },
  { title: 'Volunteer Leadership', organization: 'National Service Scheme (NSS)', description: 'Led Swachh Bharat Abhiyan activities and coordinated rural blood donation camps.' },
];
