<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IP Protect - Trademark Portal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <div class="logo"><span>IP</span> PROTECT PORTAL</div>
    </header>

    <main class="container">
        <section class="hero">
            <small>TRADEMARK INTELLIGENCE DATABASE</small>
            <h1>Verification & Brand Protection</h1>
            <p>আপনার ট্রেডমার্ক রেকর্ড সংরক্ষণ, সন্ধান এবং পরিচালনা করার সহজ পোর্টাল।</p>
        </section>

        <!-- Search Section -->
        <section class="card">
            <h2>স্মার্ট সার্চ (Search Record)</h2>
            <input type="text" id="searchInput" onkeyup="searchRecords()" placeholder="রেজিস্ট্রেশন নম্বর, ব্র্যান্ড বা মালিকের নাম দিয়ে সার্চ করুন...">
        </section>

        <!-- Add Record Form -->
        <section class="card">
            <h2>নতুন ট্রেডমার্ক যোগ করুন (Add Record)</h2>
            <form id="trademarkForm" onsubmit="addRecord(event)">
                <div class="form-group">
                    <input type="text" id="regNo" placeholder="Registration No (e.g. TM-101)" required>
                    <input type="text" id="brandName" placeholder="Brand Name" required>
                </div>
                <div class="form-group">
                    <input type="text" id="owner" placeholder="Owner Name" required>
                    <input type="text" id="classNo" placeholder="Class (e.g. Class 25)" required>
                </div>
                <div class="form-group">
                    <select id="status">
                        <option value="Registered">Registered</option>
                        <option value="Pending">Pending</option>
                        <option value="Expired">Expired</option>
                        <option value="Under Review">Under Review</option>
                    </select>
                    <button type="submit" class="btn">Add Record</button>
                </div>
            </form>
        </section>

        <!-- Records Table -->
        <section class="card">
            <h2>ট্রেডমার্ক ডাটাবেস (Database)</h2>
            <table>
                <thead>
                    <tr>
                        <th>Reg No.</th>
                        <th>Brand Name</th>
                        <th>Owner</th>
                        <th>Class</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="recordTableBody">
                    <!-- Dynamic Data Will Appear Here -->
                </tbody>
            </table>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
