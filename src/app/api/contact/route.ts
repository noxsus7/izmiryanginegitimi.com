import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  adSoyad: string;
  telefon: string;
  ilce: string;
  hizmet: string;
  mesaj: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    // Validate required fields
    const { adSoyad, telefon, ilce, hizmet, mesaj } = body;

    if (!adSoyad?.trim() || !telefon?.trim() || !ilce?.trim() || !hizmet?.trim()) {
      return NextResponse.json(
        { error: 'Lütfen tüm zorunlu alanları doldurun.' },
        { status: 400 }
      );
    }

    // Phone validation
    const cleanPhone = telefon.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Geçerli bir telefon numarası giriniz.' },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'İzmir Yangın Eğitim <onboarding@resend.dev>',
      to: 'ozerzafer35@gmail.com',
      subject: `Yeni Teklif Talebi – İzmir Yangın | ${adSoyad}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #0f172a; border-radius: 10px 10px 0 0; padding: 24px 28px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">🔥 Yeni Teklif Talebi</h1>
            <p style="color: #94a3b8; font-size: 13px; margin: 6px 0 0;">İzmir Yangın Eğitim & Güvenlik</p>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px; padding: 28px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 120px; vertical-align: top;">Ad Soyad</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${adSoyad}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; vertical-align: top;">Telefon</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">
                  <a href="tel:${cleanPhone}" style="color: #dc2626; text-decoration: none;">${telefon}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; vertical-align: top;">İlçe</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${ilce}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; vertical-align: top;">Hizmet</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${hizmet}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #64748b; vertical-align: top;">Mesaj</td>
                <td style="padding: 12px 0; color: #0f172a;">${mesaj || '<em style="color: #94a3b8;">Mesaj girilmedi</em>'}</td>
              </tr>
            </table>
          </div>
          <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 20px;">
            Bu e-posta yanginegitimiizmir.com teklif formu üzerinden otomatik gönderilmiştir.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API contact error:', err);
    return NextResponse.json(
      { error: 'Bir hata oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}
