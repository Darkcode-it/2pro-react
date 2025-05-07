import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Switch } from '../../components/ui/switch';
import { Separator } from '../../components/ui/separator';
import { Badge } from '../../components/ui/badge';
import { toast } from '../../components/ui/sonner';

const Settings = () => {
  const handleSave = (section) => {
    toast.success(`تنظیمات ${section} با موفقیت ذخیره شد.`);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">تنظیمات</h1>
          <p className="text-muted-foreground">تنظیمات سیستم خود را مدیریت کنید</p>
        </div>

        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">پروفایل</TabsTrigger>
            <TabsTrigger value="account">حساب کاربری</TabsTrigger>
            <TabsTrigger value="notifications">اعلان‌ها</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>اطلاعات پروفایل</CardTitle>
                <CardDescription>
                  اطلاعات پروفایل خود را به‌روزرسانی کنید.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">نام</Label>
                    <Input id="firstName" defaultValue="کاربر" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">نام خانوادگی</Label>
                    <Input id="lastName" defaultValue="ادمین" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">ایمیل</Label>
                    <Input id="email" type="email" defaultValue="admin@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">شماره تلفن</Label>
                    <Input id="phone" defaultValue="09123456789" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="bio">درباره من</Label>
                  <textarea 
                    id="bio"
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="درباره خودتان بنویسید..."
                    defaultValue="مدیر سیستم و توسعه دهنده وب با بیش از 5 سال سابقه."
                  ></textarea>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline">لغو</Button>
                <Button onClick={() => handleSave('پروفایل')}>ذخیره تغییرات</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات حساب کاربری</CardTitle>
                <CardDescription>
                  تنظیمات حساب کاربری خود را مدیریت کنید.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="currentPassword">رمز عبور فعلی</Label>
                    <Button variant="link" className="p-0 h-auto text-xs">فراموشی رمز عبور؟</Button>
                  </div>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">رمز عبور جدید</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">تأیید رمز عبور جدید</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="mb-4 text-lg font-medium">تنظیمات امنیتی</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>احراز هویت دو مرحله‌ای</p>
                        <p className="text-sm text-muted-foreground">امنیت حساب خود را با احراز هویت دو مرحله‌ای افزایش دهید.</p>
                      </div>
                      <Switch id="twoFactor" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>جلسه‌های فعال</p>
                        <p className="text-sm text-muted-foreground">مدیریت جلسه‌های فعال در دستگاه‌های مختلف.</p>
                      </div>
                      <Button variant="outline">مشاهده</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline">لغو</Button>
                <Button onClick={() => handleSave('حساب کاربری')}>ذخیره تغییرات</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات اعلان‌ها</CardTitle>
                <CardDescription>
                  تعیین کنید چه اعلان‌هایی را دریافت کنید.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-4 text-lg font-medium">اعلان‌های ایمیلی</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>گزارش‌های هفتگی</p>
                        <p className="text-sm text-muted-foreground">دریافت گزارش هفتگی از فعالیت‌های سایت.</p>
                      </div>
                      <Switch id="weeklyReports" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>اعلانات امنیتی</p>
                        <p className="text-sm text-muted-foreground">دریافت ایمیل در مورد فعالیت‌های مشکوک حساب.</p>
                      </div>
                      <Switch id="securityAlerts" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>خبرنامه</p>
                        <p className="text-sm text-muted-foreground">دریافت آخرین اخبار و به‌روزرسانی‌ها.</p>
                      </div>
                      <Switch id="newsletter" />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="mb-4 text-lg font-medium">اعلان‌های داخل سیستم</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p>اعلان‌های کاربران جدید</p>
                        <p className="text-sm text-muted-foreground">نمایش اعلان هنگام ثبت‌نام کاربران جدید.</p>
                      </div>
                      <Switch id="newUserNotifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p>اعلان‌های پیام‌ها</p>
                        <p className="text-sm text-muted-foreground">نمایش اعلان برای پیام‌های جدید.</p>
                      </div>
                      <Switch id="messageNotifications" defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline">پیش‌فرض‌ها</Button>
                <Button onClick={() => handleSave('اعلان‌ها')}>ذخیره تغییرات</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle>تنظیمات API</CardTitle>
                <CardDescription>
                  مدیریت کلیدهای API و دسترسی‌ها.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">کلیدهای API</h3>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="font-medium">کلید اصلی</p>
                          <p className="text-xs text-muted-foreground">آخرین استفاده: 2 ساعت پیش</p>
                        </div>
                        <Badge>فعال</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input value="sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" readOnly />
                        <Button variant="outline" size="sm">کپی</Button>
                      </div>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-md">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="font-medium">کلید تست</p>
                          <p className="text-xs text-muted-foreground">آخرین استفاده: 5 روز پیش</p>
                        </div>
                        <Badge variant="outline">تست</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Input value="sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx" readOnly />
                        <Button variant="outline" size="sm">کپی</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button>ایجاد کلید جدید</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">وب‌هوک‌ها</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="webhookUrl">آدرس وب‌هوک</Label>
                      <Input id="webhookUrl" placeholder="https://your-app.com/api/webhook" />
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">رویدادهای وب‌هوک</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="flex items-center space-x-2 ml-2">
                          <input type="checkbox" id="user.created" className="rounded" />
                          <Label htmlFor="user.created">user.created</Label>
                        </div>
                        <div className="flex items-center space-x-2 ml-2">
                          <input type="checkbox" id="user.updated" className="rounded" />
                          <Label htmlFor="user.updated">user.updated</Label>
                        </div>
                        <div className="flex items-center space-x-2 ml-2">
                          <input type="checkbox" id="payment.successful" className="rounded" />
                          <Label htmlFor="payment.successful">payment.successful</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="outline">لغو</Button>
                <Button onClick={() => handleSave('API')}>ذخیره تنظیمات</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Settings;