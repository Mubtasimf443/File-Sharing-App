/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
"use client"
import React, { useState } from 'react';
import Switch from "react-switch";

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);

    const handleToggleChange = () => {
        setEmailNotifications(!emailNotifications);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>

            <div className="space-y-6">
                {/* Email Notifications Toggle */}
                <div className="flex items-center justify-between py-3 border-b">
                    <div>
                        <h3 className="text-base font-medium">Enable Mail Notifications</h3>
                        <p className="text-sm text-gray-500">
                            Receive email notifications about file updates, shares, and activities
                        </p>
                    </div>
                    <Switch
                        checked={emailNotifications}
                        onChange={handleToggleChange}

                        aria-label="Toggle email notifications"
                    />
                </div>
            </div>
        </div>
    );
};

export default Settings;