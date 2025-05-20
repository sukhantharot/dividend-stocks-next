import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type SoonDividend = {
  symbol: string;
  year: string;
  quarter: string;
  yield_percent: string;
  amount: string;
  xd_date: string;
  pay_date: string;
  type: string;
};

async function getSoonDividends(): Promise<SoonDividend[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dividends/soon`, {
    // SSR: ไม่ cache
    cache: "no-store",
  });
  const data = await res.json();
  return data.soon || [];
}

export default async function SoonPage() {
  const soon = await getSoonDividends();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">หุ้นใกล้จะปันผล</h1>
      {soon.length === 0 ? (
        <div className="text-center text-muted-foreground">ยังไม่มีข้อมูลหุ้นใกล้จะปันผล</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {soon.map((item) => (
            <Card key={item.symbol + item.xd_date}>
              <CardHeader>
                <CardTitle>{item.symbol}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div>ปี: {item.year} | ไตรมาส: {item.quarter}</div>
                  <div>ผลตอบแทน: <span className="font-semibold">{item.yield_percent}%</span></div>
                  <div>จำนวนเงินปันผล: <span className="font-semibold">{item.amount} บาท</span></div>
                  <div>XD Date: <span className="font-semibold">{item.xd_date}</span></div>
                  <div>Pay Date: <span className="font-semibold">{item.pay_date}</span></div>
                  <div>ประเภท: {item.type}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

