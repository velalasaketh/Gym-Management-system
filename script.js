// ========================================
// APPLICATION STATE
// ========================================
const state = {
    currentUser: null,
    userRole: null,
    activeTab: 'dashboard',
    members: [],
    trainers: [],
    membershipPlans: [],
    payments: [],
    attendance: [],
    notifications: [],
    supplements: [],
    equipment: [],
    classes: [],
    logs: []
};

// ========================================
// INITIALIZE DEMO DATA
// ========================================
function initializeDemoData() {
    // Membership Plans
    state.membershipPlans = [
        { 
            id: 1, 
            name: 'Basic Plan', 
            duration: '1 Month', 
            price: 1500, 
            features: ['Gym Access', 'Locker Facility', 'Water Dispenser'],
            description: 'Perfect for beginners',
            active: true
        },
        { 
            id: 2, 
            name: 'Standard Plan', 
            duration: '3 Months', 
            price: 4000, 
            features: ['Gym Access', 'Locker Facility', 'Water Dispenser', 'Group Classes', 'Diet Consultation'],
            description: 'Most popular choice',
            active: true
        },
        { 
            id: 3, 
            name: 'Premium Plan', 
            duration: '6 Months', 
            price: 7500, 
            features: ['Gym Access', 'Personal Trainer', 'Locker Facility', 'Water Dispenser', 'Group Classes', 'Diet Plan', 'Supplements Discount'],
            description: 'Complete fitness package',
            active: true
        },
        { 
            id: 4, 
            name: 'Platinum Plan', 
            duration: '12 Months', 
            price: 14000, 
            features: ['All Premium Features', '24/7 Gym Access', 'Steam & Sauna', 'Free Protein Shake', 'Priority Booking'],
            description: 'Ultimate fitness experience',
            active: true
        }
    ];

    // Trainers
    state.trainers = [
        { 
            id: 1, 
            name: 'Rajesh Kumar', 
            specialization: 'Strength Training', 
            experience: '8 years',
            email: 'rajesh@gym.com', 
            phone: '9876543210', 
            certification: 'ACE Certified',
            members: [1, 2, 5],
            status: 'Active',
            rating: 4.8
        },
        { 
            id: 2, 
            name: 'Priya Sharma', 
            specialization: 'Yoga & Flexibility', 
            experience: '6 years',
            email: 'priya@gym.com', 
            phone: '9876543211', 
            certification: 'RYT-500',
            members: [3, 4],
            status: 'Active',
            rating: 4.9
        },
        { 
            id: 3, 
            name: 'Amit Patel', 
            specialization: 'Cardio & Weight Loss', 
            experience: '5 years',
            email: 'amit@gym.com', 
            phone: '9876543212', 
            certification: 'ACSM Certified',
            members: [6, 7],
            status: 'Active',
            rating: 4.7
        },
        { 
            id: 4, 
            name: 'Sneha Reddy', 
            specialization: 'CrossFit & HIIT', 
            experience: '4 years',
            email: 'sneha@gym.com', 
            phone: '9876543213', 
            certification: 'CrossFit Level 2',
            members: [],
            status: 'Active',
            rating: 4.6
        }
    ];

    // Members
    state.members = [
        { 
            id: 1, 
            name: 'Arjun Mehta', 
            email: 'arjun@example.com', 
            phone: '9988776655', 
            planId: 3,
            trainerId: 1,
            joinDate: '2024-01-15', 
            expiryDate: '2024-07-15',
            status: 'Active',
            age: 28,
            gender: 'Male',
            address: 'Banjara Hills, Hyderabad',
            emergencyContact: '9988776656',
            healthIssues: 'None'
        },
        { 
            id: 2, 
            name: 'Divya Singh', 
            email: 'divya@example.com', 
            phone: '9988776656', 
            planId: 2,
            trainerId: 1,
            joinDate: '2024-02-01', 
            expiryDate: '2024-05-01',
            status: 'Active',
            age: 25,
            gender: 'Female',
            address: 'Jubilee Hills, Hyderabad',
            emergencyContact: '9988776657',
            healthIssues: 'None'
        },
        { 
            id: 3, 
            name: 'Vikram Rao', 
            email: 'vikram@example.com', 
            phone: '9988776657', 
            planId: 4,
            trainerId: 2,
            joinDate: '2023-12-10', 
            expiryDate: '2024-12-10',
            status: 'Active',
            age: 35,
            gender: 'Male',
            address: 'Gachibowli, Hyderabad',
            emergencyContact: '9988776658',
            healthIssues: 'Back Pain (Under Treatment)'
        },
        { 
            id: 4, 
            name: 'Ananya Desai', 
            email: 'ananya@example.com', 
            phone: '9988776658', 
            planId: 1,
            trainerId: 2,
            joinDate: '2024-01-20', 
            expiryDate: '2024-02-20',
            status: 'Expired',
            age: 22,
            gender: 'Female',
            address: 'Kondapur, Hyderabad',
            emergencyContact: '9988776659',
            healthIssues: 'None'
        },
        { 
            id: 5, 
            name: 'Karthik Reddy', 
            email: 'karthik@example.com', 
            phone: '9988776659', 
            planId: 3,
            trainerId: 1,
            joinDate: '2024-01-25', 
            expiryDate: '2024-07-25',
            status: 'Active',
            age: 30,
            gender: 'Male',
            address: 'Madhapur, Hyderabad',
            emergencyContact: '9988776660',
            healthIssues: 'Diabetes (Controlled)'
        },
        { 
            id: 6, 
            name: 'Pooja Nair', 
            email: 'pooja@example.com', 
            phone: '9988776660', 
            planId: 2,
            trainerId: 3,
            joinDate: '2024-02-05', 
            expiryDate: '2024-05-05',
            status: 'Active',
            age: 27,
            gender: 'Female',
            address: 'Hitech City, Hyderabad',
            emergencyContact: '9988776661',
            healthIssues: 'None'
        },
        { 
            id: 7, 
            name: 'Rahul Gupta', 
            email: 'rahul@example.com', 
            phone: '9988776661', 
            planId: 1,
            trainerId: 3,
            joinDate: '2024-02-10', 
            expiryDate: '2024-03-10',
            status: 'Active',
            age: 24,
            gender: 'Male',
            address: 'Ameerpet, Hyderabad',
            emergencyContact: '9988776662',
            healthIssues: 'None'
        }
    ];

    // Payments
    state.payments = [
        { 
            id: 1, 
            memberId: 1, 
            memberName: 'Arjun Mehta', 
            amount: 7500, 
            paymentDate: '2024-01-15', 
            dueDate: '2024-01-15',
            method: 'UPI', 
            status: 'Paid',
            planName: 'Premium Plan',
            transactionId: 'TXN001234567'
        },
        { 
            id: 2, 
            memberId: 2, 
            memberName: 'Divya Singh', 
            amount: 4000, 
            paymentDate: '2024-02-01', 
            dueDate: '2024-02-01',
            method: 'Card', 
            status: 'Paid',
            planName: 'Standard Plan',
            transactionId: 'TXN001234568'
        },
        { 
            id: 3, 
            memberId: 3, 
            memberName: 'Vikram Rao', 
            amount: 14000, 
            paymentDate: '2023-12-10', 
            dueDate: '2023-12-10',
            method: 'Cash', 
            status: 'Paid',
            planName: 'Platinum Plan',
            transactionId: 'TXN001234569'
        },
        { 
            id: 4, 
            memberId: 5, 
            memberName: 'Karthik Reddy', 
            amount: 7500, 
            paymentDate: null, 
            dueDate: '2024-02-15',
            method: null, 
            status: 'Pending',
            planName: 'Premium Plan',
            transactionId: null
        },
        { 
            id: 5, 
            memberId: 6, 
            memberName: 'Pooja Nair', 
            amount: 4000, 
            paymentDate: '2024-02-05', 
            dueDate: '2024-02-05',
            method: 'UPI', 
            status: 'Paid',
            planName: 'Standard Plan',
            transactionId: 'TXN001234570'
        },
        { 
            id: 6, 
            memberId: 7, 
            memberName: 'Rahul Gupta', 
            amount: 1500, 
            paymentDate: null, 
            dueDate: '2024-02-20',
            method: null, 
            status: 'Pending',
            planName: 'Basic Plan',
            transactionId: null
        }
    ];

    // Attendance Records
    const today = new Date();
    state.attendance = [];
    for (let i = 0; i < 30; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        state.members.forEach(member => {
            if (member.status === 'Active' && Math.random() > 0.3) {
                state.attendance.push({
                    id: state.attendance.length + 1,
                    memberId: member.id,
                    memberName: member.name,
                    date: dateStr,
                    checkIn: `${6 + Math.floor(Math.random() * 6)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} AM`,
                    checkOut: `${6 + Math.floor(Math.random() * 4)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')} PM`
                });
            }
        });
    }

    // Notifications
    state.notifications = [
        { 
            id: 1, 
            title: 'Membership Expiring Soon', 
            message: 'Ananya Desai\'s membership will expire in 5 days', 
            date: '2024-02-10',
            time: '09:30 AM',
            type: 'warning',
            icon: 'fa-exclamation-triangle',
            priority: 'high'
        },
        { 
            id: 2, 
            title: 'Payment Pending', 
            message: 'Karthik Reddy has a pending payment of ₹7,500', 
            date: '2024-02-10',
            time: '10:15 AM',
            type: 'danger',
            icon: 'fa-credit-card',
            priority: 'high'
        },
        { 
            id: 3, 
            title: 'New Member Joined', 
            message: 'Rahul Gupta has joined the gym today', 
            date: '2024-02-10',
            time: '11:00 AM',
            type: 'success',
            icon: 'fa-user-plus',
            priority: 'normal'
        },
        { 
            id: 4, 
            title: 'Equipment Maintenance', 
            message: 'Treadmill #3 requires servicing', 
            date: '2024-02-09',
            time: '03:45 PM',
            type: 'warning',
            icon: 'fa-wrench',
            priority: 'normal'
        },
        { 
            id: 5, 
            title: 'Holiday Notice', 
            message: 'Gym will be closed on 26th January (Republic Day)', 
            date: '2024-02-08',
            time: '09:00 AM',
            type: 'info',
            icon: 'fa-calendar',
            priority: 'low'
        }
    ];

    // Supplements
    state.supplements = [
        { 
            id: 1, 
            name: 'Whey Protein Isolate', 
            brand: 'Optimum Nutrition',
            price: 4500, 
            stock: 45, 
            category: 'Protein',
            description: '2 kg pack, 24g protein per serving'
        },
        { 
            id: 2, 
            name: 'Creatine Monohydrate', 
            brand: 'MuscleTech',
            price: 1800, 
            stock: 32, 
            category: 'Supplement',
            description: '300g pack, unflavored'
        },
        { 
            id: 3, 
            name: 'BCAA Energy', 
            brand: 'Cellucor',
            price: 2200, 
            stock: 28, 
            category: 'Supplement',
            description: 'Fruit punch flavor, 30 servings'
        },
        { 
            id: 4, 
            name: 'Multivitamins', 
            brand: 'GNC',
            price: 1200, 
            stock: 55, 
            category: 'Vitamins',
            description: '60 capsules, daily nutrition'
        },
        { 
            id: 5, 
            name: 'Pre-Workout', 
            brand: 'C4',
            price: 2500, 
            stock: 20, 
            category: 'Supplement',
            description: 'Energy boost, 30 servings'
        },
        { 
            id: 6, 
            name: 'Mass Gainer', 
            brand: 'Serious Mass',
            price: 3500, 
            stock: 18, 
            category: 'Protein',
            description: '3 kg pack, 1250 calories per serving'
        }
    ];

    // Equipment
    state.equipment = [
        { 
            id: 1, 
            name: 'Treadmill', 
            brand: 'Life Fitness',
            quantity: 8, 
            status: 'Working',
            lastMaintenance: '2024-01-15',
            nextMaintenance: '2024-04-15'
        },
        { 
            id: 2, 
            name: 'Exercise Bike', 
            brand: 'Schwinn',
            quantity: 6, 
            status: 'Working',
            lastMaintenance: '2024-01-20',
            nextMaintenance: '2024-04-20'
        },
        { 
            id: 3, 
            name: 'Elliptical Trainer', 
            brand: 'Precor',
            quantity: 5, 
            status: 'Working',
            lastMaintenance: '2024-01-10',
            nextMaintenance: '2024-04-10'
        },
        { 
            id: 4, 
            name: 'Smith Machine', 
            brand: 'Hammer Strength',
            quantity: 2, 
            status: 'Working',
            lastMaintenance: '2024-02-01',
            nextMaintenance: '2024-05-01'
        },
        { 
            id: 5, 
            name: 'Cable Machine', 
            brand: 'Life Fitness',
            quantity: 3, 
            status: 'Maintenance',
            lastMaintenance: '2024-01-25',
            nextMaintenance: '2024-02-15'
        },
        { 
            id: 6, 
            name: 'Dumbbells Set', 
            brand: 'Rogue',
            quantity: 20, 
            status: 'Working',
            lastMaintenance: '2024-01-05',
            nextMaintenance: '2024-04-05'
        }
    ];

    // Classes
    state.classes = [
        { 
            id: 1, 
            name: 'Morning Yoga', 
            trainerId: 2,
            trainerName: 'Priya Sharma',
            schedule: 'Mon, Wed, Fri - 6:00 AM',
            duration: '60 min',
            capacity: 20,
            enrolled: 15,
            status: 'Active'
        },
        { 
            id: 2, 
            name: 'HIIT Training', 
            trainerId: 4,
            trainerName: 'Sneha Reddy',
            schedule: 'Tue, Thu, Sat - 7:00 AM',
            duration: '45 min',
            capacity: 15,
            enrolled: 12,
            status: 'Active'
        },
        { 
            id: 3, 
            name: 'Strength & Conditioning', 
            trainerId: 1,
            trainerName: 'Rajesh Kumar',
            schedule: 'Mon, Wed, Fri - 6:00 PM',
            duration: '60 min',
            capacity: 12,
            enrolled: 10,
            status: 'Active'
        },
        { 
            id: 4, 
            name: 'Zumba Dance', 
            trainerId: 2,
            trainerName: 'Priya Sharma',
            schedule: 'Tue, Thu - 6:30 PM',
            duration: '45 min',
            capacity: 25,
            enrolled: 20,
            status: 'Active'
        }
    ];
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function addLog(action, details) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${state.userRole?.toUpperCase()} - ${state.currentUser}: ${action} - ${details}`;
    state.logs.push(logEntry);
    console.log(logEntry);
}

function formatCurrency(amount) {
    return `₹${amount.toLocaleString('en-IN')}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTimeElement = document.getElementById('dateTime');
    if (dateTimeElement) {
        dateTimeElement.textContent = now.toLocaleDateString('en-IN', options);
    }
}

function getMemberPlan(member) {
    return state.membershipPlans.find(p => p.id === member.planId);
}

function getTrainer(trainerId) {
    return state.trainers.find(t => t.id === trainerId);
}

// ========================================
// LOGIN & LOGOUT
// ========================================
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const role = document.getElementById('loginRole').value;
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (username && password) {
        state.currentUser = username;
        state.userRole = role;
        
        initializeDemoData();
        addLog('LOGIN', `User logged in as ${role}`);
        
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('mainApp').classList.remove('hidden');
        
        document.getElementById('userInfo').innerHTML = `<i class="fas fa-user-circle"></i> Welcome, ${username} (${role})`;
        
        renderSidebar();
        renderContent();
        updateDateTime();
        setInterval(updateDateTime, 60000); // Update every minute
    }
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        addLog('LOGOUT', 'User logged out');
        
        state.currentUser = null;
        state.userRole = null;
        state.activeTab = 'dashboard';
        
        document.getElementById('loginScreen').classList.remove('hidden');
        document.getElementById('mainApp').classList.add('hidden');
        
        document.getElementById('loginForm').reset();
    }
});

// ========================================
// SIDEBAR RENDERING
// ========================================
function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    nav.innerHTML = '';

    const menuItems = {
        admin: [
            { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
            { id: 'members', label: 'Members', icon: 'fa-users' },
            { id: 'trainers', label: 'Trainers', icon: 'fa-user-tie' },
            { id: 'plans', label: 'Membership Plans', icon: 'fa-clipboard-list' },
            { id: 'payments', label: 'Payments', icon: 'fa-credit-card' },
            { id: 'attendance', label: 'Attendance', icon: 'fa-calendar-check' },
            { id: 'classes', label: 'Classes', icon: 'fa-dumbbell' },
            { id: 'equipment', label: 'Equipment', icon: 'fa-wrench' },
            { id: 'supplements', label: 'Supplements', icon: 'fa-pills' },
            { id: 'notifications', label: 'Notifications', icon: 'fa-bell' },
            { id: 'reports', label: 'Reports', icon: 'fa-file-chart-line' }
        ],
        trainer: [
            { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
            { id: 'my-members', label: 'My Members', icon: 'fa-users' },
            { id: 'my-classes', label: 'My Classes', icon: 'fa-dumbbell' },
            { id: 'attendance', label: 'Attendance', icon: 'fa-calendar-check' },
            { id: 'notifications', label: 'Notifications', icon: 'fa-bell' }
        ],
        member: [
            { id: 'dashboard', label: 'Dashboard', icon: 'fa-chart-line' },
            { id: 'my-profile', label: 'My Profile', icon: 'fa-user' },
            { id: 'my-payments', label: 'My Payments', icon: 'fa-credit-card' },
            { id: 'my-attendance', label: 'My Attendance', icon: 'fa-calendar-check' },
            { id: 'classes', label: 'Classes', icon: 'fa-dumbbell' },
            { id: 'supplements', label: 'Supplements', icon: 'fa-pills' },
            { id: 'notifications', label: 'Notifications', icon: 'fa-bell' }
        ]
    };

    const items = menuItems[state.userRole] || menuItems.admin;

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = `nav-item ${state.activeTab === item.id ? 'active' : ''}`;
        div.innerHTML = `<i class="fas ${item.icon}"></i> <span>${item.label}</span>`;
        div.addEventListener('click', () => {
            state.activeTab = item.id;
            renderSidebar();
            renderContent();
        });
        nav.appendChild(div);
    });
}

// ========================================
// MAIN CONTENT ROUTER
// ========================================
function renderContent() {
    const content = document.getElementById('mainContent');
    
    const routes = {
        'dashboard': renderDashboard,
        'members': renderMembers,
        'trainers': renderTrainers,
        'plans': renderPlans,
        'payments': renderPayments,
        'attendance': renderAttendance,
        'classes': renderClasses,
        'equipment': renderEquipment,
        'supplements': renderSupplements,
        'notifications': renderNotifications,
        'reports': renderReports,
        'my-members': renderMyMembers,
        'my-classes': renderMyClasses,
        'my-profile': renderMyProfile,
        'my-payments': renderMyPayments,
        'my-attendance': renderMyAttendance
    };

    const renderFunction = routes[state.activeTab] || renderDashboard;
    renderFunction(content);
}

// ========================================
// DASHBOARD
// ========================================
function renderDashboard(container) {
    const activeMembers = state.members.filter(m => m.status === 'Active').length;
    const totalRevenue = state.payments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.amount, 0);
    const pendingPayments = state.payments.filter(p => p.status === 'Pending').length;
    const todayAttendance = state.attendance.filter(a => a.date === new Date().toISOString().split('T')[0]).length;
    
    const recentMembers = state.members.slice(-5).reverse();
    const recentPayments = state.payments.slice(-5).reverse();

    container.innerHTML = `
        <h2><i class="fas fa-chart-line"></i> Dashboard</h2>
        
        <div class="stats-grid">
            <div class="stat-card primary">
                <div class="stat-card-header">
                    <h3>Active Members</h3>
                    <i class="fas fa-users stat-card-icon"></i>
                </div>
                <div class="stat-value">${activeMembers}</div>
                <div class="stat-label">Total: ${state.members.length} members</div>
            </div>
            
            <div class="stat-card success">
                <div class="stat-card-header">
                    <h3>Total Revenue</h3>
                    <i class="fas fa-rupee-sign stat-card-icon"></i>
                </div>
                <div class="stat-value">${formatCurrency(totalRevenue)}</div>
                <div class="stat-label">All-time earnings</div>
            </div>
            
            <div class="stat-card warning">
                <div class="stat-card-header">
                    <h3>Pending Payments</h3>
                    <i class="fas fa-clock stat-card-icon"></i>
                </div>
                <div class="stat-value">${pendingPayments}</div>
                <div class="stat-label">Requires attention</div>
            </div>
            
            <div class="stat-card info">
                <div class="stat-card-header">
                    <h3>Today's Attendance</h3>
                    <i class="fas fa-calendar-check stat-card-icon"></i>
                </div>
                <div class="stat-value">${todayAttendance}</div>
                <div class="stat-label">Members present</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 30px;">
            <div>
                <h3 style="margin-bottom: 20px; color: #1f2937;">
                    <i class="fas fa-user-plus"></i> Recent Members
                </h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Plan</th>
                                <th>Join Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${recentMembers.map(member => {
                                const plan = getMemberPlan(member);
                                return `
                                    <tr>
                                        <td>${member.name}</td>
                                        <td>${plan.name}</td>
                                        <td>${formatDate(member.joinDate)}</td>
                                        <td><span class="badge badge-${member.status === 'Active' ? 'success' : 'danger'}">
                                            <i class="fas fa-circle"></i> ${member.status}
                                        </span></td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 style="margin-bottom: 20px; color: #1f2937;">
                    <i class="fas fa-money-bill-wave"></i> Recent Payments
                </h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Member</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${recentPayments.map(payment => `
                                <tr>
                                    <td>${payment.memberName}</td>
                                    <td>${formatCurrency(payment.amount)}</td>
                                    <td>${payment.paymentDate ? formatDate(payment.paymentDate) : '-'}</td>
                                    <td><span class="badge badge-${payment.status === 'Paid' ? 'success' : 'warning'}">
                                        <i class="fas fa-circle"></i> ${payment.status}
                                    </span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// ========================================
// MEMBERS MANAGEMENT
// ========================================
function renderMembers(container) {
    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-users"></i> Members Management</h2>
            <button class="btn btn-primary" onclick="openAddMemberModal()">
                <i class="fas fa-user-plus"></i> Add New Member
            </button>
        </div>

        <input type="text" class="search-box" id="memberSearch" placeholder="Search members by name, email, or phone...">

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Plan</th>
                        <th>Trainer</th>
                        <th>Join Date</th>
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="membersTableBody">
                    ${renderMemberRows(state.members)}
                </tbody>
            </table>
        </div>
    `;

    document.getElementById('memberSearch').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = state.members.filter(m => 
            m.name.toLowerCase().includes(searchTerm) ||
            m.email.toLowerCase().includes(searchTerm) ||
            m.phone.includes(searchTerm)
        );
        document.getElementById('membersTableBody').innerHTML = renderMemberRows(filtered);
    });
}

function renderMemberRows(members) {
    return members.map(member => {
        const plan = getMemberPlan(member);
        const trainer = getTrainer(member.trainerId);
        return `
            <tr>
                <td>${member.id}</td>
                <td>
                    <div style="font-weight: 600;">${member.name}</div>
                    <div style="font-size: 12px; color: #6b7280;">${member.email}</div>
                </td>
                <td>${member.phone}</td>
                <td>${plan ? plan.name : 'N/A'}</td>
                <td>${trainer ? trainer.name : 'Not Assigned'}</td>
                <td>${formatDate(member.joinDate)}</td>
                <td>${formatDate(member.expiryDate)}</td>
                <td>
                    <span class="badge badge-${member.status === 'Active' ? 'success' : 'danger'}">
                        <i class="fas fa-circle"></i> ${member.status}
                    </span>
                </td>
                <td>
                    <div class="action-btns">
                        <button class="btn-icon view" onclick="viewMember(${member.id})" title="View Details">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn-icon edit" onclick="editMember(${member.id})" title="Edit">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-icon delete" onclick="deleteMember(${member.id})" title="Delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// ========================================
// TRAINERS MANAGEMENT
// ========================================
function renderTrainers(container) {
    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-user-tie"></i> Trainers Management</h2>
            <button class="btn btn-primary" onclick="openAddTrainerModal()">
                <i class="fas fa-user-plus"></i> Add New Trainer
            </button>
        </div>

        <div class="card-grid">
            ${state.trainers.map(trainer => `
                <div class="card trainer-card">
                    <div class="trainer-avatar">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="trainer-info">
                        <h4>${trainer.name}</h4>
                        <div class="specialization">
                            <i class="fas fa-star"></i> ${trainer.specialization}
                        </div>
                        <div class="card-info">
                            <div class="card-info-item">
                                <i class="fas fa-certificate"></i>
                                <span>${trainer.certification}</span>
                            </div>
                            <div class="card-info-item">
                                <i class="fas fa-clock"></i>
                                <span>${trainer.experience} experience</span>
                            </div>
                            <div class="card-info-item">
                                <i class="fas fa-users"></i>
                                <span>${trainer.members.length} members assigned</span>
                            </div>
                            <div class="card-info-item">
                                <i class="fas fa-star"></i>
                                <span>Rating: ${trainer.rating}/5</span>
                            </div>
                        </div>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-primary" onclick="viewTrainer(${trainer.id})">
                                <i class="fas fa-eye"></i> View Details
                            </button>
                            <button class="btn btn-sm btn-secondary" onclick="editTrainer(${trainer.id})">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ========================================
// MEMBERSHIP PLANS
// ========================================
function renderPlans(container) {
    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-clipboard-list"></i> Membership Plans</h2>
            <button class="btn btn-primary" onclick="openAddPlanModal()">
                <i class="fas fa-plus"></i> Add New Plan
            </button>
        </div>

        <div class="card-grid">
            ${state.membershipPlans.map(plan => `
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h3>${plan.name}</h3>
                            <p style="color: #6b7280; font-size: 14px;">${plan.description}</p>
                        </div>
                        <span class="badge badge-${plan.active ? 'success' : 'secondary'}">
                            ${plan.active ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                    <div class="price">${formatCurrency(plan.price)}</div>
                    <div style="color: #6b7280; font-size: 14px; margin-bottom: 15px;">
                        <i class="fas fa-calendar"></i> ${plan.duration}
                    </div>
                    <div style="margin-top: 15px;">
                        <strong style="color: #374151;">Features:</strong>
                        <ul style="margin-top: 10px; padding-left: 20px; color: #6b7280;">
                            ${plan.features.map(feature => `<li style="margin-bottom: 8px;">${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-sm btn-secondary" onclick="editPlan(${plan.id})">
                            <i class="fas fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-danger" onclick="deletePlan(${plan.id})">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ========================================
// PAYMENTS MANAGEMENT
// ========================================
function renderPayments(container) {
    const totalPaid = state.payments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + p.amount, 0);
    const totalPending = state.payments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + p.amount, 0);

    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-credit-card"></i> Payments Management</h2>
            <button class="btn btn-primary" onclick="openAddPaymentModal()">
                <i class="fas fa-plus"></i> Record Payment
            </button>
        </div>

        <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="stat-card success">
                <h3>Total Paid</h3>
                <div class="stat-value">${formatCurrency(totalPaid)}</div>
            </div>
            <div class="stat-card warning">
                <h3>Total Pending</h3>
                <div class="stat-value">${formatCurrency(totalPending)}</div>
            </div>
            <div class="stat-card info">
                <h3>Total Payments</h3>
                <div class="stat-value">${state.payments.length}</div>
            </div>
        </div>

        <div class="filters">
            <div class="filter-group">
                <label>Filter by Status</label>
                <select id="paymentStatusFilter" onchange="filterPayments()">
                    <option value="all">All Payments</option>
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                </select>
            </div>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Member</th>
                        <th>Plan</th>
                        <th>Amount</th>
                        <th>Due Date</th>
                        <th>Payment Date</th>
                        <th>Method</th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="paymentsTableBody">
                    ${renderPaymentRows(state.payments)}
                </tbody>
            </table>
        </div>
    `;
}

function renderPaymentRows(payments) {
    return payments.map(payment => `
        <tr>
            <td>${payment.id}</td>
            <td>${payment.memberName}</td>
            <td>${payment.planName}</td>
            <td><strong>${formatCurrency(payment.amount)}</strong></td>
            <td>${formatDate(payment.dueDate)}</td>
            <td>${payment.paymentDate ? formatDate(payment.paymentDate) : '-'}</td>
            <td>${payment.method || '-'}</td>
            <td style="font-family: monospace;">${payment.transactionId || '-'}</td>
            <td>
                <span class="badge badge-${payment.status === 'Paid' ? 'success' : 'warning'}">
                    <i class="fas fa-circle"></i> ${payment.status}
                </span>
            </td>
            <td>
                <div class="action-btns">
                    ${payment.status === 'Pending' ? `
                        <button class="btn-icon edit" onclick="markAsPaid(${payment.id})" title="Mark as Paid">
                            <i class="fas fa-check"></i>
                        </button>
                    ` : ''}
                    <button class="btn-icon delete" onclick="deletePayment(${payment.id})" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function filterPayments() {
    const status = document.getElementById('paymentStatusFilter').value;
    const filtered = status === 'all' ? state.payments : state.payments.filter(p => p.status === status);
    document.getElementById('paymentsTableBody').innerHTML = renderPaymentRows(filtered);
}

// ========================================
// ATTENDANCE MANAGEMENT
// ========================================
function renderAttendance(container) {
    const today = new Date().toISOString().split('T')[0];
    const todayAttendance = state.attendance.filter(a => a.date === today);

    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-calendar-check"></i> Attendance Management</h2>
            <button class="btn btn-primary" onclick="markAttendance()">
                <i class="fas fa-check"></i> Mark Attendance
            </button>
        </div>

        <div class="stats-grid" style="grid-template-columns: repeat(2, 1fr);">
            <div class="stat-card success">
                <h3>Today's Attendance</h3>
                <div class="stat-value">${todayAttendance.length}</div>
                <div class="stat-label">Out of ${state.members.filter(m => m.status === 'Active').length} active members</div>
            </div>
            <div class="stat-card info">
                <h3>Total Records</h3>
                <div class="stat-value">${state.attendance.length}</div>
                <div class="stat-label">All-time attendance logs</div>
            </div>
        </div>

        <div class="filters">
            <div class="filter-group">
                <label>Select Date</label>
                <input type="date" id="attendanceDate" value="${today}" onchange="filterAttendanceByDate()">
            </div>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>Member Name</th>
                        <th>Date</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                    </tr>
                </thead>
                <tbody id="attendanceTableBody">
                    ${renderAttendanceRows(todayAttendance)}
                </tbody>
            </table>
        </div>
    `;
}

function renderAttendanceRows(records) {
    if (records.length === 0) {
        return `<tr><td colspan="5" class="text-center text-muted">No attendance records for this date</td></tr>`;
    }
    return records.map(record => `
        <tr>
            <td>${record.memberId}</td>
            <td>${record.memberName}</td>
            <td>${formatDate(record.date)}</td>
            <td><span class="badge badge-success">${record.checkIn}</span></td>
            <td><span class="badge badge-info">${record.checkOut}</span></td>
        </tr>
    `).join('');
}

function filterAttendanceByDate() {
    const selectedDate = document.getElementById('attendanceDate').value;
    const filtered = state.attendance.filter(a => a.date === selectedDate);
    document.getElementById('attendanceTableBody').innerHTML = renderAttendanceRows(filtered);
}

// ========================================
// CLASSES MANAGEMENT
// ========================================
function renderClasses(container) {
    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-dumbbell"></i> Classes Management</h2>
            ${state.userRole === 'admin' ? `
                <button class="btn btn-primary" onclick="openAddClassModal()">
                    <i class="fas fa-plus"></i> Add New Class
                </button>
            ` : ''}
        </div>

        <div class="card-grid">
            ${state.classes.map(cls => {
                const enrollmentPercentage = (cls.enrolled / cls.capacity * 100).toFixed(0);
                return `
                    <div class="card">
                        <div class="card-header">
                            <h3>${cls.name}</h3>
                            <span class="badge badge-${cls.status === 'Active' ? 'success' : 'secondary'}">
                                ${cls.status}
                            </span>
                        </div>
                        <div class="card-info">
                            <div class="card-info-item">
                                <i class="fas fa-user-tie"></i>
                                <span>${cls.trainerName}</span>
                            </div>
                            <div class="card-info-item">
                                <i class="fas fa-clock"></i>
                                <span>${cls.schedule}</span>
                            </div>
                            <div class="card-info-item">
                                <i class="fas fa-hourglass-half"></i>
                                <span>${cls.duration}</span>
                            </div>
                            <div class="card-info-item">
                                <i class="fas fa-users"></i>
                                <span>${cls.enrolled}/${cls.capacity} enrolled</span>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${enrollmentPercentage}%"></div>
                        </div>
                        <div class="card-actions">
                            ${state.userRole === 'member' ? `
                                <button class="btn btn-sm btn-success" style="flex: 1;">
                                    <i class="fas fa-user-plus"></i> Enroll
                                </button>
                            ` : `
                                <button class="btn btn-sm btn-secondary" onclick="editClass(${cls.id})">
                                    <i class="fas fa-edit"></i> Edit
                                </button>
                            `}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// ========================================
// EQUIPMENT MANAGEMENT
// ========================================
function renderEquipment(container) {
    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-wrench"></i> Equipment Management</h2>
            <button class="btn btn-primary" onclick="openAddEquipmentModal()">
                <i class="fas fa-plus"></i> Add Equipment
            </button>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Equipment Name</th>
                        <th>Brand</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Last Maintenance</th>
                        <th>Next Maintenance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    ${state.equipment.map(eq => `
                        <tr>
                            <td><strong>${eq.name}</strong></td>
                            <td>${eq.brand}</td>
                            <td>${eq.quantity}</td>
                            <td>
                                <span class="badge badge-${eq.status === 'Working' ? 'success' : 'warning'}">
                                    <i class="fas fa-circle"></i> ${eq.status}
                                </span>
                            </td>
                            <td>${formatDate(eq.lastMaintenance)}</td>
                            <td>${formatDate(eq.nextMaintenance)}</td>
                            <td>
                                <div class="action-btns">
                                    <button class="btn-icon edit" onclick="editEquipment(${eq.id})" title="Edit">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                    <button class="btn-icon delete" onclick="deleteEquipment(${eq.id})" title="Delete">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
}

// ========================================
// SUPPLEMENTS MANAGEMENT
// ========================================
function renderSupplements(container) {
    const totalValue = state.supplements.reduce((sum, s) => sum + (s.price * s.stock), 0);

    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-pills"></i> Supplements Inventory</h2>
            ${state.userRole === 'admin' ? `
                <button class="btn btn-primary" onclick="openAddSupplementModal()">
                    <i class="fas fa-plus"></i> Add Supplement
                </button>
            ` : ''}
        </div>

        ${state.userRole === 'admin' ? `
            <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr);">
                <div class="stat-card primary">
                    <h3>Total Products</h3>
                    <div class="stat-value">${state.supplements.length}</div>
                </div>
                <div class="stat-card success">
                    <h3>Inventory Value</h3>
                    <div class="stat-value">${formatCurrency(totalValue)}</div>
                </div>
                <div class="stat-card warning">
                    <h3>Low Stock Items</h3>
                    <div class="stat-value">${state.supplements.filter(s => s.stock < 25).length}</div>
                </div>
            </div>
        ` : ''}

        <div class="card-grid">
            ${state.supplements.map(supp => `
                <div class="card">
                    <div class="card-header">
                        <div>
                            <h4>${supp.name}</h4>
                            <p style="color: #667eea; font-size: 13px; font-weight: 600;">${supp.brand}</p>
                        </div>
                        <span class="badge badge-${supp.category === 'Protein' ? 'primary' : supp.category === 'Vitamins' ? 'success' : 'info'}">
                            ${supp.category}
                        </span>
                    </div>
                    <div class="price">${formatCurrency(supp.price)}</div>
                    <p style="color: #6b7280; font-size: 13px; margin-bottom: 15px;">${supp.description}</p>
                    <div class="card-info-item" style="margin-bottom: 15px;">
                        <i class="fas fa-box"></i>
                        <span>Stock: <strong ${supp.stock < 25 ? 'style="color: #ef4444;"' : ''}>${supp.stock} units</strong></span>
                    </div>
                    <div class="card-actions">
                        ${state.userRole === 'member' ? `
                            <button class="btn btn-sm btn-success" style="flex: 1;">
                                <i class="fas fa-shopping-cart"></i> Purchase
                            </button>
                        ` : `
                            <button class="btn btn-sm btn-secondary" onclick="editSupplement(${supp.id})">
                                <i class="fas fa-edit"></i> Edit
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="deleteSupplement(${supp.id})">
                                <i class="fas fa-trash"></i> Delete
                            </button>
                        `}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ========================================
// NOTIFICATIONS
// ========================================
function renderNotifications(container) {
    container.innerHTML = `
        <div class="content-header">
            <h2><i class="fas fa-bell"></i> Notifications</h2>
            ${state.userRole === 'admin' ? `
                <button class="btn btn-primary" onclick="openAddNotificationModal()">
                    <i class="fas fa-plus"></i> Add Notification
                </button>
            ` : ''}
        </div>

        <div class="notification-list">
            ${state.notifications.map(notif => `
                <div class="notification-item ${notif.type}">
                    <div class="notification-header">
                        <h4>
                            <i class="fas ${notif.icon}"></i>
                            ${notif.title}
                        </h4>
                        ${state.userRole === 'admin' ? `
                            <button class="btn-icon delete" onclick="deleteNotification(${notif.id})">
                                <i class="fas fa-times"></i>
                            </button>
                        ` : ''}
                    </div>
                    <p>${notif.message}</p>
                    <div class="date">
                        <i class="far fa-calendar"></i>
                        ${formatDate(notif.date)} at ${notif.time}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ========================================
// REPORTS
// ========================================
function renderReports(container) {
    const monthlyRevenue = state.payments
        .filter(p => p.status === 'Paid' && p.paymentDate)
        .reduce((acc, p) => {
            const month = new Date(p.paymentDate).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
            acc[month] = (acc[month] || 0) + p.amount;
            return acc;
        }, {});

    const planDistribution = state.members.reduce((acc, m) => {
        const plan = getMemberPlan(m);
        if (plan) {
            acc[plan.name] = (acc[plan.name] || 0) + 1;
        }
        return acc;
    }, {});

    container.innerHTML = `
        <h2><i class="fas fa-file-chart-line"></i> Reports & Analytics</h2>

        <div class="stats-grid">
            <div class="stat-card primary">
                <h3>Total Members</h3>
                <div class="stat-value">${state.members.length}</div>
                <div class="stat-label">Active: ${state.members.filter(m => m.status === 'Active').length}</div>
            </div>
            <div class="stat-card success">
                <h3>Total Revenue</h3>
                <div class="stat-value">${formatCurrency(state.payments.filter(p => p.status === 'Paid').reduce((s, p) => s + p.amount, 0))}</div>
            </div>
            <div class="stat-card info">
                <h3>Active Trainers</h3>
                <div class="stat-value">${state.trainers.filter(t => t.status === 'Active').length}</div>
            </div>
            <div class="stat-card warning">
                <h3>Active Classes</h3>
                <div class="stat-value">${state.classes.filter(c => c.status === 'Active').length}</div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 30px;">
            <div class="chart-container">
                <h3>Monthly Revenue</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(monthlyRevenue).map(([month, amount]) => `
                                <tr>
                                    <td>${month}</td>
                                    <td><strong>${formatCurrency(amount)}</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="chart-container">
                <h3>Plan Distribution</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Plan</th>
                                <th>Members</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(planDistribution).map(([plan, count]) => `
                                <tr>
                                    <td>${plan}</td>
                                    <td><strong>${count}</strong></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div style="margin-top: 30px; text-align: center;">
            <button class="btn btn-primary" onclick="exportReport()">
                <i class="fas fa-download"></i> Export Full Report (JSON)
            </button>
        </div>
    `;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function showModal(title, fields, onSubmit) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalFields').innerHTML = fields;
    document.getElementById('modal').classList.remove('hidden');

    const form = document.getElementById('modalForm');
    form.onsubmit = function(e) {
        e.preventDefault();
        onSubmit();
        closeModal();
    };
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modalForm').reset();
}

document.getElementById('modalClose').addEventListener('click', closeModal);

// Confirmation Modal
function showConfirmModal(title, message, onConfirm) {
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    document.getElementById('confirmModal').classList.remove('hidden');

    document.getElementById('confirmYes').onclick = function() {
        onConfirm();
        closeConfirmModal();
    };
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.add('hidden');
}

// ========================================
// CRUD OPERATIONS - MEMBERS
// ========================================
function openAddMemberModal() {
    showModal('Add New Member', `
        <div class="form-group">
            <label><i class="fas fa-user"></i> Full Name</label>
            <input type="text" id="memberName" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-envelope"></i> Email</label>
            <input type="email" id="memberEmail" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-phone"></i> Phone</label>
            <input type="tel" id="memberPhone" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-calendar"></i> Age</label>
            <input type="number" id="memberAge" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-venus-mars"></i> Gender</label>
            <select id="memberGender" required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div class="form-group">
            <label><i class="fas fa-map-marker-alt"></i> Address</label>
            <textarea id="memberAddress" rows="2" required></textarea>
        </div>
        <div class="form-group">
            <label><i class="fas fa-clipboard-list"></i> Membership Plan</label>
            <select id="memberPlan" required>
                ${state.membershipPlans.filter(p => p.active).map(p => 
                    `<option value="${p.id}">${p.name} - ${formatCurrency(p.price)}</option>`
                ).join('')}
            </select>
        </div>
        <div class="form-group">
            <label><i class="fas fa-user-tie"></i> Assign Trainer</label>
            <select id="memberTrainer" required>
                <option value="">Select Trainer</option>
                ${state.trainers.filter(t => t.status === 'Active').map(t => 
                    `<option value="${t.id}">${t.name} - ${t.specialization}</option>`
                ).join('')}
            </select>
        </div>
        <div class="form-group">
            <label><i class="fas fa-phone-alt"></i> Emergency Contact</label>
            <input type="tel" id="memberEmergency" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-heartbeat"></i> Health Issues (if any)</label>
            <textarea id="memberHealth" rows="2" placeholder="None"></textarea>
        </div>
    `, addMember);
}

function addMember() {
    const planId = parseInt(document.getElementById('memberPlan').value);
    const plan = getMemberPlan({ planId });
    const joinDate = new Date().toISOString().split('T')[0];
    let expiryDate = new Date();
    
    // Calculate expiry based on plan duration
    if (plan.duration.includes('Month')) {
        const months = parseInt(plan.duration);
        expiryDate.setMonth(expiryDate.getMonth() + months);
    } else if (plan.duration.includes('Year')) {
        const years = parseInt(plan.duration);
        expiryDate.setFullYear(expiryDate.getFullYear() + years);
    }

    const newMember = {
        id: state.members.length + 1,
        name: document.getElementById('memberName').value,
        email: document.getElementById('memberEmail').value,
        phone: document.getElementById('memberPhone').value,
        age: parseInt(document.getElementById('memberAge').value),
        gender: document.getElementById('memberGender').value,
        address: document.getElementById('memberAddress').value,
        planId: planId,
        trainerId: parseInt(document.getElementById('memberTrainer').value) || null,
        joinDate: joinDate,
        expiryDate: expiryDate.toISOString().split('T')[0],
        status: 'Active',
        emergencyContact: document.getElementById('memberEmergency').value,
        healthIssues: document.getElementById('memberHealth').value || 'None'
    };
    
    state.members.push(newMember);
    addLog('ADD_MEMBER', `Added new member: ${newMember.name}`);
    renderContent();
}

function viewMember(id) {
    const member = state.members.find(m => m.id === id);
    const plan = getMemberPlan(member);
    const trainer = getTrainer(member.trainerId);
    
    alert(`
Member Details:
--------------
Name: ${member.name}
Email: ${member.email}
Phone: ${member.phone}
Age: ${member.age}
Gender: ${member.gender}
Address: ${member.address}
Plan: ${plan.name}
Trainer: ${trainer ? trainer.name : 'Not Assigned'}
Join Date: ${formatDate(member.joinDate)}
Expiry Date: ${formatDate(member.expiryDate)}
Status: ${member.status}
Emergency Contact: ${member.emergencyContact}
Health Issues: ${member.healthIssues}
    `);
}

function editMember(id) {
    const member = state.members.find(m => m.id === id);
    
    showModal('Edit Member', `
        <div class="form-group">
            <label><i class="fas fa-user"></i> Full Name</label>
            <input type="text" id="memberName" value="${member.name}" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-envelope"></i> Email</label>
            <input type="email" id="memberEmail" value="${member.email}" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-phone"></i> Phone</label>
            <input type="tel" id="memberPhone" value="${member.phone}" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-clipboard-list"></i> Status</label>
            <select id="memberStatus">
                <option value="Active" ${member.status === 'Active' ? 'selected' : ''}>Active</option>
                <option value="Expired" ${member.status === 'Expired' ? 'selected' : ''}>Expired</option>
                <option value="Suspended" ${member.status === 'Suspended' ? 'selected' : ''}>Suspended</option>
            </select>
        </div>
    `, () => {
        member.name = document.getElementById('memberName').value;
        member.email = document.getElementById('memberEmail').value;
        member.phone = document.getElementById('memberPhone').value;
        member.status = document.getElementById('memberStatus').value;
        addLog('UPDATE_MEMBER', `Updated member: ${member.name}`);
        renderContent();
    });
}

function deleteMember(id) {
    const member = state.members.find(m => m.id === id);
    showConfirmModal(
        'Delete Member',
        `Are you sure you want to delete ${member.name}? This action cannot be undone.`,
        () => {
            state.members = state.members.filter(m => m.id !== id);
            addLog('DELETE_MEMBER', `Deleted member: ${member.name}`);
            renderContent();
        }
    );
}

// ========================================
// CRUD OPERATIONS - OTHER ENTITIES
// ========================================
function openAddPaymentModal() {
    showModal('Record Payment', `
        <div class="form-group">
            <label><i class="fas fa-user"></i> Select Member</label>
            <select id="paymentMember" required>
                <option value="">Select Member</option>
                ${state.members.filter(m => m.status === 'Active').map(m => {
                    const plan = getMemberPlan(m);
                    return `<option value="${m.id}">${m.name} - ${plan.name}</option>`;
                }).join('')}
            </select>
        </div>
        <div class="form-group">
            <label><i class="fas fa-rupee-sign"></i> Amount</label>
            <input type="number" id="paymentAmount" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-credit-card"></i> Payment Method</label>
            <select id="paymentMethod" required>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card/Debit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>
        </div>
        <div class="form-group">
            <label><i class="fas fa-hashtag"></i> Transaction ID</label>
            <input type="text" id="paymentTransaction" placeholder="Optional">
        </div>
    `, () => {
        const memberId = parseInt(document.getElementById('paymentMember').value);
        const member = state.members.find(m => m.id === memberId);
        const plan = getMemberPlan(member);
        
        const payment = {
            id: state.payments.length + 1,
            memberId: member.id,
            memberName: member.name,
            amount: parseFloat(document.getElementById('paymentAmount').value),
            paymentDate: new Date().toISOString().split('T')[0],
            dueDate: new Date().toISOString().split('T')[0],
            method: document.getElementById('paymentMethod').value,
            status: 'Paid',
            planName: plan.name,
            transactionId: document.getElementById('paymentTransaction').value || `TXN${Date.now()}`
        };
        
        state.payments.push(payment);
        addLog('ADD_PAYMENT', `Recorded payment: ${member.name} - ${formatCurrency(payment.amount)}`);
        renderContent();
    });
}

function markAsPaid(id) {
    const payment = state.payments.find(p => p.id === id);
    showModal('Mark Payment as Paid', `
        <div class="form-group">
            <label><i class="fas fa-credit-card"></i> Payment Method</label>
            <select id="paymentMethod" required>
                <option value="Cash">Cash</option>
                <option value="UPI">UPI</option>
                <option value="Card">Card/Debit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
            </select>
        </div>
        <div class="form-group">
            <label><i class="fas fa-hashtag"></i> Transaction ID</label>
            <input type="text" id="paymentTransaction" placeholder="Optional">
        </div>
    `, () => {
        payment.status = 'Paid';
        payment.paymentDate = new Date().toISOString().split('T')[0];
        payment.method = document.getElementById('paymentMethod').value;
        payment.transactionId = document.getElementById('paymentTransaction').value || `TXN${Date.now()}`;
        addLog('MARK_PAID', `Marked payment as paid: ${payment.memberName}`);
        renderContent();
    });
}

function deletePayment(id) {
    const payment = state.payments.find(p => p.id === id);
    showConfirmModal(
        'Delete Payment',
        `Are you sure you want to delete this payment record?`,
        () => {
            state.payments = state.payments.filter(p => p.id !== id);
            addLog('DELETE_PAYMENT', `Deleted payment: ${payment.memberName}`);
            renderContent();
        }
    );
}

function markAttendance() {
    alert('Attendance marking feature - Scan member ID or select from list');
    // This would open a modal to mark attendance
}

function openAddNotificationModal() {
    showModal('Add Notification', `
        <div class="form-group">
            <label><i class="fas fa-heading"></i> Title</label>
            <input type="text" id="notifTitle" required>
        </div>
        <div class="form-group">
            <label><i class="fas fa-comment"></i> Message</label>
            <textarea id="notifMessage" rows="3" required></textarea>
        </div>
        <div class="form-group">
            <label><i class="fas fa-tag"></i> Type</label>
            <select id="notifType">
                <option value="info">Information</option>
                <option value="warning">Warning</option>
                <option value="success">Success</option>
                <option value="danger">Alert</option>
            </select>
        </div>
    `, () => {
        const icons = {
            info: 'fa-info-circle',
            warning: 'fa-exclamation-triangle',
            success: 'fa-check-circle',
            danger: 'fa-exclamation-circle'
        };
        const type = document.getElementById('notifType').value;
        
        state.notifications.unshift({
            id: state.notifications.length + 1,
            title: document.getElementById('notifTitle').value,
            message: document.getElementById('notifMessage').value,
            date: new Date().toISOString().split('T')[0],
            time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
            type: type,
            icon: icons[type],
            priority: type === 'danger' ? 'high' : 'normal'
        });
        addLog('ADD_NOTIFICATION', 'Added new notification');
        renderContent();
    });
}

function deleteNotification(id) {
    state.notifications = state.notifications.filter(n => n.id !== id);
    renderContent();
}

// Placeholder functions for other CRUD operations
function openAddTrainerModal() { alert('Add Trainer Modal - To be implemented'); }
function viewTrainer(id) { alert('View Trainer Details - To be implemented'); }
function editTrainer(id) { alert('Edit Trainer - To be implemented'); }
function openAddPlanModal() { alert('Add Plan Modal - To be implemented'); }
function editPlan(id) { alert('Edit Plan - To be implemented'); }
function deletePlan(id) { alert('Delete Plan - To be implemented'); }
function openAddClassModal() { alert('Add Class Modal - To be implemented'); }
function editClass(id) { alert('Edit Class - To be implemented'); }
function openAddEquipmentModal() { alert('Add Equipment Modal - To be implemented'); }
function editEquipment(id) { alert('Edit Equipment - To be implemented'); }
function deleteEquipment(id) { alert('Delete Equipment - To be implemented'); }
function openAddSupplementModal() { alert('Add Supplement Modal - To be implemented'); }
function editSupplement(id) { alert('Edit Supplement - To be implemented'); }
function deleteSupplement(id) { alert('Delete Supplement - To be implemented'); }

// Export Report
function exportReport() {
    const report = {
        generatedAt: new Date().toISOString(),
        summary: {
            totalMembers: state.members.length,
            activeMembers: state.members.filter(m => m.status === 'Active').length,
            totalTrainers: state.trainers.length,
            totalRevenue: state.payments.filter(p => p.status === 'Paid').reduce((s, p) => s + p.amount, 0),
            pendingPayments: state.payments.filter(p => p.status === 'Pending').length
        },
        members: state.members,
        trainers: state.trainers,
        payments: state.payments,
        attendance: state.attendance,
        logs: state.logs
    };
    
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `gym_report_${Date.now()}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    
    addLog('EXPORT_REPORT', 'Generated and exported comprehensive report');
    alert('Report exported successfully!');
}

// Trainer/Member specific views (simplified)
function renderMyMembers(container) {
    container.innerHTML = '<h2><i class="fas fa-users"></i> My Assigned Members</h2><p>Trainer view - members assigned to logged-in trainer</p>';
}

function renderMyClasses(container) {
    container.innerHTML = '<h2><i class="fas fa-dumbbell"></i> My Classes</h2><p>Trainer view - classes conducted by logged-in trainer</p>';
}

function renderMyProfile(container) {
    container.innerHTML = '<h2><i class="fas fa-user"></i> My Profile</h2><p>Member profile view with personal details and progress tracking</p>';
}

function renderMyPayments(container) {
    container.innerHTML = '<h2><i class="fas fa-credit-card"></i> My Payments</h2><p>Member view - payment history</p>';
}

function renderMyAttendance(container) {
    container.innerHTML = '<h2><i class="fas fa-calendar-check"></i> My Attendance</h2><p>Member view - personal attendance records</p>';
}