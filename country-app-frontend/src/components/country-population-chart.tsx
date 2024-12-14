'use client'

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { year: 1991, value: 186 },
  { year: 1992, value: 305 },
  { year: 1993, value: 237 },
  { year: 1994, value: 73 },
  { year: 1995, value: 209 },
  { year: 1996, value: 214 },
]

const chartConfig = {
  value: {
    label: 'Population',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig

export function CountryPopulationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{"Country's"} population over time</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="value"
              type="linear"
              fill="var(--color-value)"
              fillOpacity={0.4}
              stroke="var(--color-value)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
